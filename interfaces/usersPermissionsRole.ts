import { iUser } from "./user";
import { isUsersPermissionsPermission } from "./usersPermissionsPermission";

export interface iUsersPermissionsRole {
  id: string;
  name: string;
  description: string;
  type: string;
  permissions: Array<isUsersPermissionsPermission>;
  users: Array<iUser>;
}
