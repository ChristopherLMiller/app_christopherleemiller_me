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

interface iCanAccessPage {
  isSecure: boolean;
}
export function canAccessPage({ isSecure }: iCanAccessPage) {
  const auth = getAuth();

  if (isSecure) {
    if (auth.isAuthenticated)
      return true;
  }

  return false;
}