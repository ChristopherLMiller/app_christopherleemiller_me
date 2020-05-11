import { iUsersPermissionsRole } from "interfaces/usersPermissionsRole";

export interface isUsersPermissionsPermission {
  id: string;
  type: string;
  controller: string;
  action: string;
  enabled: boolean;
  policy: string;
  role: iUsersPermissionsRole;
}
