import { useAuth } from "../../lib/hook/useAuth";
import Cookies from 'js-cookie';

export function getAuth() {
  const auth = useAuth();

  // see if we are authenticated via context first
  if (!auth.isAuthenticated) {
    // Nope?  Ok how about a cookie?
    const jwt = Cookies.get('jwt');

    // if the cookie is undefined there wasn't a session
    if (jwt !== undefined) {
      auth.refetchUser(jwt);
    }
  }
  return auth;
}

export interface iCanAccessPage {
  isSecure: boolean;
  permitted?: {
    groups: string[];
  }
}
export function canAccessPage({ isSecure, permitted }: iCanAccessPage) {
  const auth = getAuth();


  // see if the page is secured or not
  if (isSecure) {
    // it's a secure page, are we authenticated?
    if (auth.isAuthenticated) {
      // See if ther permitted group list includes the users role
      if (permitted && permitted.groups.includes(auth.user.role.name)) {
        return true;
      } else {
        return false;
      }
    }
  } else {
    return true;
  }
}