import * as ts from "typesript";

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_CLOCKIFY_API_KEY: string;
      NEXT_PUBLIC_CLOCKIFY_WORKSPACE_ID: string;
      NEXT_PUBLIC_SITE_VERSION: string;
      LOGROCKET: string;
      NEXT_PUBLIC_SITE_URL: string;
      FB_APP_ID: string;
      SENTRY_PUBLIC_DSN: string;
      EMAIL_ADDRESS: string;
      EMAIL_PASSWORD: string;
    }
  }
}
