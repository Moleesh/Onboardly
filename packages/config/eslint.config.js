/**
 * @module EslintConfig
 * @description Shared lint configuration for the monorepo.
 * @author auto
 * @since 1.0.0
 */
import js from "@eslint/js";
import tseslint from "typescript-eslint";

export default tseslint.config(js.configs.recommended, ...tseslint.configs.strict, {
  rules: {
    "@typescript-eslint/no-extraneous-class": "off",
    "no-console": "error",
    "@typescript-eslint/explicit-function-return-type": "error",
  },
});
