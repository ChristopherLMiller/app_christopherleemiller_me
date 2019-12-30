import { useAuth } from "../../lib/hook/useAuth";
import cookie from 'react-cookies';

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

type hasPermissionOptions = {
  useContext?: boolean,
  useCookie?: boolean,
}

// Function to check if currently authenticted user has permission
// to access the resource
export function hasPermission(groups: hasPermissionType, options?: hasPermissionOptions, ctx?: any) {
  // Context is only available server side, thus initial page render.
  // We can assume if the user cookie is present on the request that
  // we are being server rendered
  if (options?.useContext) {
    console.debug('hasPermission: useRequestContext');
    const userCookie = ctx.req?.cookies?.user;
    if (userCookie) {
      console.debug('hasPermission: User cookie found');
      const user = JSON.parse(userCookie);
      const userGroup = user.role.name;
      return groups.groups.includes(userGroup);
    }
  }

  // check if we want to use the cookie instead
  if (options?.useCookie) {
    console.debug('hasPermision: useCookie');
    const user = cookie.load('user');
    if (user) {
      return groups.groups.includes(user.role.name)
    }
  }

  if (!options?.useCookie && !options?.useContext) {
    const auth = useAuth();

    if (auth.isAuthenticated) {
      return groups.groups.includes(auth.user.role.name)
    }
  }

  // implicit return false to prevent edge cases
  return false;
}

// Function to check if the currently authenticated user is
// the owner of the item referenced
export function isOwner(id: string) {
  const auth = useAuth();

  if (auth.isAuthenticated) {

    return auth.user.id == id
  }

  // implicit return null
  return null;
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

// object containing role to id mappings
export const roles = {
  admin: 'Administrator',
  mod: 'Mod',
  person: 'Person',
}