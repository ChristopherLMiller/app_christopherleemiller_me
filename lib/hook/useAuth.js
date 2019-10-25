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
    fetch(`${API_ENDPOINT}/auth/local`, {
      body: JSON.stringify(data),
      method: 'POST',
      headers: {
        'Content-Type': 'Application/json'
      }
    })
      .then(res => res.json())
      .then(data => {
        // set the app state
        setUser(data.user);
        setJwt(data.jwt);
        setIsAuthenticated(true);


        // save this to a cookie as well to retrieve later
        Cookies.set('jwt', data.jwt);
        return data.user
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
    fetch(`${API_ENDPOINT}/users/me`, {
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
  // confirm password reset

  return {
    user,
    jwt,
    isAuthenticated,
    signin,
    signout,
    refetchUser
  }
}