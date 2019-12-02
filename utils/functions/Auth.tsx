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

type hasPermissionType = {
  groups: string[]
}

export function hasPermission(groups: hasPermissionType) {
  const auth = useAuth();

  if (auth.isAuthenticated) {
    console.log(getRoleByName());
    if (groups.groups.includes(getRoleByName())) {
      return true;
    }
  }

  // implicit return false to prevent edge cases
  return false;
}

export function getRoleByName() {
  const auth = useAuth();

  if (auth.isAuthenticated) {
    return auth.user.role.name;
  }

  // implicit return of guest
  return 'Guest';
}