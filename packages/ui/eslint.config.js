import baseConfig from "@idserv/eslint-config/base";
import reactConfig from "@idserv/eslint-config/react";

/** @type {import('typescript-eslint').Config} */
export default [
  {
    ignores: ["dist/**"],
  },
  ...baseConfig,
  ...reactConfig,
];
