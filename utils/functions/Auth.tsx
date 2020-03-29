import { useAuth } from "../../lib/hook/useAuth";
import cookie from 'react-cookies';

export interface iCanAccessResource {
  isSecure: boolean;
  permitted?: {
    groups: string[];
  }
}
export function canAccessResource({ isSecure, permitted }: iCanAccessResource) {
  const user = cookie.load('user');
  console.debug('Auth:canAccessResource');
  //console.debug(user);

  // see if the page is secure or not
  if (isSecure) {
    // We can assume person is authenticated if the user object isn't null
    if (user) {
      // check the permitted groups for users role
      return permitted?.groups.includes(getUserRoleByName());
    }
  } else {
    // unsecure page
    return true;
  }

  // implicit deny to avoid any edge cases
  return false;
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
  const user = cookie.load('user');
  return user?.role?.name;
}

export function getUserRoleByID() {
  const user = cookie.load('user');
  return user?.role?.id;
}

// function to return if user is authenticated or not
export function isAuthenticated() {
  const user = cookie.load('user');

  if (user !== undefined && user !== null) {
    return true;
  }

  // implicit return false to prevent accident auth
  return false;
}

// function to get the email of the authenticated user
export function getUserEmail() {
  const user = cookie.load('user');
  return user?.email;
}

// function to get the name of the authenticated user
export function getUserName() {
  const user = cookie.load('user');
  return user?.username;
}

// object containing role to id mappings
export const roles = {
  admin: 'Administrator',
  mod: 'Mod',
  person: 'Person',
}