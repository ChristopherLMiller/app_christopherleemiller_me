import { useState, useContext, createContext } from "react";
import cookie from "react-cookies";
import { API_ENDPOINT } from "../../config";

// @ts-ignore
export const authContext = createContext();

// Provider hook that creates auth object and handles state
export function useProvideAuth() {
  const [user, setUser] = useState<iUser | null>();
  const [jwt, setJwt] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Sign In
  const signin = (identifier?: string, password?: string) => {
    if (!process.browser) {
      return;
    }

    // send post request to strapi
    return fetch(`${API_ENDPOINT}/auth/local`, {
      body: JSON.stringify({ identifier, password }),
      method: `POST`,
      headers: {
        "Content-Type": `Application/json`,
      },
    })
      .then((res) => {
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
      .then((data) => {
        /*if (data?.status !== 200 && data?.status != undefined) {
          setIsAuthenticated(false);

          // set the response code
          return {
            status: data.status,
            message: data.message,
          };
        }*/

        // set the app state
        setUser(data.user);
        setJwt(data.jwt);
        setIsAuthenticated(true);

        // save this to local storage as well to retrieve later
        cookie.save(`jwt`, data.jwt, { maxAge: 86400 });
        cookie.save("user", data.user, { maxAge: 86400 });

        return {
          status: 200,
          data: data.user,
        };
      });
  };

  // signout
  const signout = () => {
    // clear out the app state
    setUser(null);
    setJwt("");
    setIsAuthenticated(false);

    // also remove the item from local storage
    cookie.remove(`user`);
    cookie.remove(`jwt`);

    return;
  };

  // Fetch User
  const refetchUser = (token: string) => {
    return fetch(`${API_ENDPOINT}/users/me`, {
      method: `GET`,
      headers: {
        "Content-Type": `Application/json`,
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("fetched user");
        console.log(data);
        setUser(data);
        setJwt(token);
        setIsAuthenticated(true);
        return data;
      });
  };

  // password reset
  const requestPasswordReset = (email: string) => {
    const data = {
      email,
    };

    return fetch(`${API_ENDPOINT}/auth/forgot-password`, {
      body: JSON.stringify(data),
      method: `POST`,
      headers: {
        "Content-Type": `Application/json`,
      },
    })
      .then((res) => {
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
      .then((data) => {
        if (data?.status !== 200) {
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
  const resetPassword = (
    password: string,
    passwordConfirm: string,
    code: string | string[]
  ) => {
    const data = {
      password,
      passwordConfirmation: passwordConfirm,
      code,
    };

    return fetch(`${API_ENDPOINT}/auth/reset-password`, {
      body: JSON.stringify(data),
      method: `POST`,
      headers: {
        "Content-Type": `Application/json`,
      },
    })
      .then((res) => {
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
      .then((data) => {
        if (data?.status !== 200) {
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
        cookie.save(`jwt`, data.jwt, { maxAge: 86400 });

        return {
          status: 200,
          data: data.user,
        };
      });
  };

  // function to determine if user is able to access resource
  const canAccessResource = (authObject?: iAuthObject) => {
    // Checking resource access is as follows
    // 1) Check if the resource is secure
    if (authObject?.isSecure) {
      // 2) Verify person is logged in
      if (isAuthenticated) {
        const role = getUserRoleByName();
        // 3) Check if their group is in the array permitted passed in
        return role
          ? authObject?.permittedGroups?.groups.includes(role)
          : false;
      } else {
        // person isn't logged in
        return false;
      }
    } else {
      // insecure page
      return true;
    }

    // lastly implicit deny to prevent any unknowns
  };

  // function to check if currently authenticated user has permission to access resource
  const hasPermission = (permittedGroups: iPermittedGroups) => {
    // check if authenticated first
    if (isAuthenticated) {
      const role = getUserRoleByName();
      return role ? permittedGroups?.groups.includes(role) : false;
    }

    // implicit deny of course
    return false;
  };

  const isOwner = (id: string) => {
    if (isAuthenticated) {
      return getUserRoleByID() === id;
    }

    // implicit deny
    return false;
  };

  const getUserRoleByName = () => {
    return isAuthenticated ? user?.role.name : null;
  };

  const getUserRoleByID = () => {
    return user?.role?.id;
  };

  const getUserEmail = () => {
    return user?.email;
  };

  const getUserName = () => {
    return user?.username;
  };

  return {
    user,
    jwt,
    isAuthenticated,
    signin,
    signout,
    refetchUser,
    resetPassword,
    requestPasswordReset,
    canAccessResource,
    hasPermission,
    isOwner,
    getUserEmail,
    getUserName,

    getUserRoleByID,
    getUserRoleByName,
    setJwt,
    setUser,
    setIsAuthenticated,
  };
}

// Provider component that wraps your app and makes auth object ...
// ... available to any child component that calls useAuth().
//@ts-ignore
export function ProvideAuth({ jwt, user, children }) {
  const auth = useProvideAuth();

  if (jwt) {
    auth.user = user;
    auth.jwt = jwt;
    auth.isAuthenticated = true;
  }
  return <authContext.Provider value={auth}> {children} </authContext.Provider>;
}

// Hook for child components to get the auth object ...
// ... and re-render when it changes.
export const useAuth = () => useContext(authContext);

// object containing role to id mappings
export const roles = {
  admin: "Administrator",
  mod: "Mod",
  person: "Person",
};

export interface iPermittedGroups {
  groups: Array<string>;
}

export interface iAuthObject {
  isSecure: boolean;
  permittedGroups: iPermittedGroups;
}

export interface iUser {
  blocked: boolean;
  confirmed: boolean;
  created_at: string;
  email: string;
  id: string;
  provider: string;
  updated_at: string;
  username: string;
  role: {
    id: string;
    description: string;
    name: string;
    type: string;
  };
}
