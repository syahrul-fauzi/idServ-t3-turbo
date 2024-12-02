import baseConfig, { restrictEnvAccess } from "@idserv/eslint-config/base";
import nextjsConfig from "@idserv/eslint-config/nextjs";
import reactConfig from "@idserv/eslint-config/react";

/** @type {import('typescript-eslint').Config} */
export default [
  {
    ignores: [".next/**"],
  },
  ...baseConfig,
  ...reactConfig,
  ...nextjsConfig,
  ...restrictEnvAccess,
];
