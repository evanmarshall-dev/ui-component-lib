import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import { defineConfig } from "eslint/config";
import jestDom from "eslint-plugin-jest-dom";
import testingLibrary from "eslint-plugin-testing-library";
import vitest from "eslint-plugin-vitest";

export default defineConfig([
  { ignores: ["dist/"] },
  js.configs.recommended,
  {
    files: ["**/*.{js,jsx}"],
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      "jest-dom": jestDom,
      "testing-library": testingLibrary,
      vitest,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.vitest,
        ...vitest.environments.env.globals,
      },
      parserOptions: {
        ecmaVersion: "latest",
        ecmaFeatures: { jsx: true },
        sourceType: "module",
      },
    },
    rules: {
      ...reactHooks.configs["recommended-latest"].rules,
      ...reactRefresh.configs.vite.rules,
      "no-unused-vars": ["error", { varsIgnorePattern: "^[A-Z_]" }],
      ...jestDom.configs.recommended.rules,
      ...testingLibrary.configs.react.rules,
      ...vitest.configs.recommended.rules,
    },
  },
]);
