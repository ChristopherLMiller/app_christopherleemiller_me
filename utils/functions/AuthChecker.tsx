import { useAuth } from "../../lib/hook/useAuth";

export interface iCanAccessPage {
  isSecure: boolean;
  permitted?: {
    groups: string[];
  }
}
export function canAccessPage({ isSecure, permitted }: iCanAccessPage) {
  const auth = useAuth();

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