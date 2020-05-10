import { iUsersPermissionsRole } from "interfaces/usersPermissionsRole";

export interface iUser {
  id: string;
  created_at: string;
  updated_at: string;
  username: string;
  email: string;
  provider: string;
  confirmed: boolean;
  blocked: boolean;
  role: iUsersPermissionsRole;
}
