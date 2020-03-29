import { useState, useContext, createContext } from 'react';
import cookie from 'react-cookies';
import { API_ENDPOINT } from '../../config';

export const authContext = createContext();

// Provider hook that creates auth object and handles state
export function useProvideAuth() {
  const [user, setUser] = useState(null);
  const [jwt, setJwt] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Sign In
  const signin = (identifier, password) => {
    if (!process.browser) {
      return;
    }

    const data = {
      identifier,
      password,
    };

    // send post request to strapi
    return fetch(`${API_ENDPOINT}/auth/local`, {
      body: JSON.stringify(data),
      method: `POST`,
      headers: {
        'Content-Type': `Application/json`,
      },
    })
      .then(res => {
        if (res.status === 200) {
          return res.json();
        }
        if (res.status === 400) {
          return {
            status: res.status,
            message: `Please check username/password and try again.`,
          };
        }
        return {
          status: res.status,
          message: `Unable to sign in.  Please Try Again.`,
        };
      })
      .then(data => {
        if (data.status && data.status !== 200) {
          setIsAuthenticated(false);

          // set the response code
          return {
            status: data.status,
            message: data.message,
          };
        }
        // set the app state
        setUser(data.user);
        setJwt(data.jwt);
        setIsAuthenticated(true);

        // save this to local storage as well to retrieve later
        cookie.save(`user`, data.user);
        cookie.save(`jwt`, data.jwt);

        return {
          status: 200,
          data: data.user,
        };
      });
  };

  // signout
  const signout = () => {
    // clear out the app state
    setUser({});
    setJwt(null);
    setIsAuthenticated(false);

    // also remove the item from local storage
    cookie.remove(`user`);
    cookie.remove(`jwt`);
  };

  // Fetch User
  const refetchUser = jwt =>
    fetch(`${API_ENDPOINT}/users/me`, {
      method: `GET`,
      headers: {
        'Content-Type': `Application/json`,
        Authorization: `Bearer ${jwt}`,
      },
    })
      .then(res => res.json())
      .then(data => {
        cookie.save(`user`, data.user);
        cookie.save(`jwt`, data.jwt);
        setUser(data);
        setJwt(jwt);
        setIsAuthenticated(true);
        return data;
      });

  // password reset
  const requestPasswordReset = email => {
    const data = {
      email,
    };

    return fetch(`${API_ENDPOINT}/auth/forgot-password`, {
      body: JSON.stringify(data),
      method: `POST`,
      headers: {
        'Content-Type': `Application/json`,
      },
    })
      .then(res => {
        if (res.status === 200) {
          return res.json();
        }
        if (res.status === 400) {
          return {
            status: res.status,
            message: `No account exists with this email address.`,
          };
        }
        return {
          status: res.status,
          message: `Unable to process password request.  Please try again.`,
        };
      })
      .then(data => {
        if (data.status && data.status !== 200) {
          return {
            status: data.status,
            message: data.message,
          };
        }
        return {
          status: 200,
          message: `Email sent successfully.  Check Email for link to reset password.`,
        };
      });
  };

  // confirm password reset
  const resetPassword = (password, passwordConfirm, code) => {
    const data = {
      password,
      passwordConfirmation: passwordConfirm,
      code,
    };

    return fetch(`${API_ENDPOINT}/auth/reset-password`, {
      body: JSON.stringify(data),
      method: `POST`,
      headers: {
        'Content-Type': `Application/json`,
      },
    })
      .then(res => {
        if (res.status === 200) {
          return res.json();
        }
        if (res.status === 400) {
          return {
            status: res.status,
            message: `Code is no longer valid.  Please request new email or verify passwords match.`,
          };
        }
        return {
          status: res.status,
          message: `Unable to reset password.  Please Try Again.`,
        };
      })
      .then(data => {
        if (data.status && data.status !== 200) {
          // set the response code
          return {
            status: data.status,
            message: data.message,
          };
        }
        // since we got back all the user data, lets go ahead and log them in
        // set the app state
        setUser(data.user);
        setJwt(data.jwt);
        setIsAuthenticated(true);

        // save this to local storage as well to retrieve later
        cookie.save(`user`, data.user);
        cookie.save(`jwt`, data.jwt);

        return {
          status: 200,
          data: data.user,
        };
      });
  };

  // function to determine if user is able to access resource
  const canAccessResource = ({isSecure, permittedGroups}) => {
    // Checking resource access is as follows
    // 1) Check if the resource is secure
    if (isSecure) {
      // 2) Verify person is logged in
      if (isAuthenticated) {
        // 3) Check if their group is in the array permitted passed in
        return permittedGroups?.groups.includes(user?.role?.name);
      } else {
        // person isn't logged in
        return false;
      }
    } else {
      // insecure page
      return true;
    }

    // lastly implicit deny to prevent any unknowns
  }

  // function to check if currently authenticated user has permission to access resource
  const hasPermission = ({permittedGroups}) => {
    // check if authenticated first
    if (isAuthenticated) {
      return permittedGroups?.groups.includes(user.role.name);
    }

    // implicit deny of course
    return false;
  }

  const isOwner = ({id}) => {
    if (isAuthenticated) {
      return user.id === id;
    }

    // implicit deny
    return false;
  }

  const getUserRoleByName = () => {
    return user?.role?.name;
  }

  const getUserRoleByID = () => {
    return user?.role?.id;
  }

  const getUserEmail = () => {
    return user?.email;
  }

  const getUserName = () => {
    return user?.username;
  }

  return {
    user,
    jwt,
    isAuthenticated,
    signin,
    signout,
    refetchUser,
    resetPassword,
    requestPasswordReset,
    setUser,
    canAccessResource,
    hasPermission,
    isOwner,
    getUserEmail,
    getUserName,
    getUserRoleByID,
    getUserRoleByName,
  };
}

// Provider component that wraps your app and makes auth object ...
// ... available to any child component that calls useAuth().
export function ProvideAuth({ user, children }) {
  const auth = useProvideAuth();

  if (user) {
    auth.user = user;
    auth.isAuthenticated = true;
  }
  return <authContext.Provider value={auth}> {children} </authContext.Provider>;
}

// Hook for child components to get the auth object ...
// ... and re-render when it changes.
export const useAuth = () => useContext(authContext);
