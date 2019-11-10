import { useState, useEffect, useContext, createContext } from 'react';
import { API_ENDPOINT } from '../../config';
import Cookies from 'js-cookie';
import { API } from '@sentry/core';

const authContext = createContext();

// Provider component that wraps your app and makes auth object ...
// ... available to any child component that calls useAuth().
export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}> {children} </authContext.Provider>;
}

// Hook for child components to get the auth object ...
// ... and re-render when it changes.
export const useAuth = () => {
  return useContext(authContext);
}

// Provider hook that creates auth object and handles state
function useProvideAuth() {
  const [user, setUser] = useState({});
  const [jwt, setJwt] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Sign In
  const signin = (identifier, password) => {
    if (!process.browser) {
      return;
    }

    const data = {
      identifier,
      password
    };

    // send post request to strapi
    return fetch(`${API_ENDPOINT}/auth/local`, {
      body: JSON.stringify(data),
      method: 'POST',
      headers: {
        'Content-Type': 'Application/json'
      }
    })
      .then(res => {
        if (res.status === 200) {
          return res.json();
        } else if (res.status === 400) {
          return {
            status: res.status,
            message: 'Please check username/password and try again.'
          }
        } else {
          return {
            status: res.status,
            message: 'Unable to sign in.  Please Try Again.'
          }
        }
      })
      .then((data) => {
        if (data.status && data.status !== 200) {
          setIsAuthenticated(false);

          // set the response code
          return {
            status: data.status,
            message: data.message
          }
        } else {
          // set the app state
          setUser(data.user);
          setJwt(data.jwt);
          setIsAuthenticated(true);

          // save this to a cookie as well to retrieve later
          Cookies.set('jwt', data.jwt);

          return {
            status: 200,
            data: data.user,
          }
        }
      })
  }

  // signout
  const signout = () => {
    // clear out the app state
    setUser({});
    setJwt(null);
    setIsAuthenticated(false);

    // also remove the cookie
    Cookies.remove('jwt');
  }

  // Fetch User
  const refetchUser = (jwt) => {
    return fetch(`${API_ENDPOINT}/users/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'Application/json',
        'Authorization': `Bearer ${jwt}`
      }
    })
      .then(res => res.json())
      .then(data => {
        setUser(data);
        setJwt(jwt);
        setIsAuthenticated(true);
        return data
      });
  }

  // signup
  // password reset
  const requestPasswordReset = (email) => {
    const data = {
      email
    };

    return fetch(`${API_ENDPOINT}/auth/forgot-password`, {
      body: JSON.stringify(data),
      method: 'POST',
      headers: {
        'Content-Type': 'Application/json'
      }
    })
      .then(res => {
        if (res.status === 200) {
          return res.json();
        } else if (res.status === 400) {
          return {
            status: res.status,
            message: `No account exists with this email address.`
          }
        } else {
          return {
            status: res.status,
            message: 'Unable to process password request.  Please try again.'
          }
        }
      })
      .then((data) => {
        if (data.status && data.status !== 200) {
          return {
            status: data.status,
            message: data.message,
          }
        } else {
          return {
            status: 200,
            message: 'Email sent successfully.  Check Email for link to reset password.'
          }
        }
      });
  }

  // confirm password reset
  const resetPassword = (password, passwordConfirm, code) => {
    const data = {
      password,
      passwordConfirmation: passwordConfirm,
      code
    };

    return fetch(`${API_ENDPOINT}/auth/reset-password`, {
      body: JSON.stringify(data),
      method: 'POST',
      headers: {
        'Content-Type': 'Application/json'
      }
    })
      .then(res => {
        if (res.status === 200) {
          return res.json();
        } else if (res.status === 400) {
          return {
            status: res.status,
            message: 'Code is no longer valid.  Please request new email or verify passwords match.'
          }
        } else {
          return {
            status: res.status,
            message: 'Unable to reset password.  Please Try Again.'
          }
        }
      })
      .then((data) => {
        if (data.status && data.status !== 200) {
          // set the response code
          return {
            status: data.status,
            message: data.message
          }
        } else {
          // since we got back all the user data, lets go ahead and log them in
          // set the app state
          setUser(data.user);
          setJwt(data.jwt);
          setIsAuthenticated(true);

          // save this to a cookie as well to retrieve later
          Cookies.set('jwt', data.jwt);

          return {
            status: 200,
            data: data.user,
          }
        }
      });
  }

  return {
    user,
    jwt,
    isAuthenticated,
    signin,
    signout,
    refetchUser,
    resetPassword,
    requestPasswordReset
  }
}