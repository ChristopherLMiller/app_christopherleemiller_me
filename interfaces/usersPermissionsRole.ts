import { iUser } from "interfaces/user";
import { isUsersPermissionsPermission } from "interfaces/usersPermissionsPermission";

export interface iUsersPermissionsRole {
  id: string;
  name: string;
  description: string;
  type: string;
  permissions: Array<isUsersPermissionsPermission>;
  users: Array<iUser>;
}
