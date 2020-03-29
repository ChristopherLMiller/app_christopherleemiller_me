export interface iCanAccessResource {
    isSecure: boolean;
    permitted?: {
      groups: string[];
    }
  }