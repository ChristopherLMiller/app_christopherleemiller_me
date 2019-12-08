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
    if (groups.groups.includes(getUserRoleByName())) {
      return true;
    }
  }

  // implicit return false to prevent edge cases
  return false;
}

export function getUserRoleByName() {
  const auth = useAuth();
  return auth.isAuthenticated ? auth.user.role.name : null;
}

export function getUserRoleByID() {
  const auth = useAuth();
  return auth.isAuthenticated ? auth.user.role.id : 0;
}

// function to return if user is authenticated or not
export function isAuthenticated() {
  const auth = useAuth();
  return auth.isAuthenticated;
}

// function to get the email of the authenticated user
export function getUserEmail() {
  const auth = useAuth();
  return auth.isAuthenticated ? auth.user.email : null;
}

// function to get the name of the authenticated user
export function getUserName() {
  const auth = useAuth();
  return auth.isAuthenticated ? auth.user.username : null;
}