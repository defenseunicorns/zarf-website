// basic .eslintrc.js compatible with react prettier and typescript
module.exports = {
    // Specifies the ESLint parser for TypeScript
    parser: "@typescript-eslint/parser",
    extends: [
      "plugin:react/recommended",
      "plugin:prettier/recommended",
    ],
    settings: {
      react: {
        version: "detect",
      },
    },
    env: {
      browser: true,
      node: true,
      es6: true,
    },
    plugins: ["prettier", "react", "unused-imports"],
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      // Allows for the parsing of modern ECMAScript features
      ecmaVersion: 2018,
      // Allows for the use of imports
      sourceType: "module",
    },
    rules: {
      // Disable prop-types as we use TypeScript for type checking
      "react/prop-types": "off",
      "prettier/explicit-function-return-type": "off",
      // Enable prettier rules
      "prettier/prettier": "error",
      // interface start with capital I
      "prettier/interface-name-prefix": "off",
      "prettier/no-unused-vars": "off",
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": "error"
    },
  };