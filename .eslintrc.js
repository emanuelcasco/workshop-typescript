module.exports = {
  "env": {
    "es6": true,
    "node": true,
    "jest": true
  },
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 2019,
    "sourceType": "module",
    "project": './lessons/tsconfig.json',
    "tsconfigRootDir": __dirname,
    "createDefaultProgram": true
  },
  "plugins": [
    "@typescript-eslint/tslint",
    "prettier"
  ],
  "extends": [
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "wolox-node"
  ],
  "rules": {
    "arrow-body-style": "off",
    "brace-style": "off",
    "camelcase": "off",
    "class-name-casing": "off",
    "func-call-spacing": "off",
    "indent": "off",
    "init-declarations": "off",
    "max-classes-per-file": "off",
    "no-array-constructor": "off",
    "no-extra-parens": "off",
    "no-magic-numbers": "off",
    "no-empty-function": "off",
    "no-console": "off",
    "no-unused-expressions": "off",
    "no-unused-vars": "off",
    "no-use-before-define": "off",
    "no-useless-constructor": "off",
    "line-comment-position": "off",
    "lines-between-class-members": "off",
    "prefer-const": "off",
    "space-before-function-paren": "off",
    "semi": "off",
    "valid-jsdoc": "off",
    "@typescript-eslint/array-type": "array",
    "@typescript-eslint/brace-style": ["stroustrup", { "allowSingleLine": true }],
    "@typescript-eslint/camelcase": "allow",
    "@typescript-eslint/class-name-casing": ["error", { "allowUnderscorePrefix": true }],
    "@typescript-eslint/consistent-type-assertions": "error",
    "@typescript-eslint/consistent-type-definitions": "off",
    "@typescript-eslint/explicit-function-return-type": "error",
    "@typescript-eslint/func-call-spacing": "error",
    "@typescript-eslint/indent": ["error", 2],
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/member-delimiter-style": "error",
    "@typescript-eslint/no-array-constructor": "error",
    "@typescript-eslint/no-empty-function": "error",
    "@typescript-eslint/no-empty-interface": ["error", { "allowSingleExtends": false }],
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-extra-parens": "error",
    "@typescript-eslint/no-extraneous-class": "error",
    "@typescript-eslint/no-misused-new": "error",
    "@typescript-eslint/no-misused-promises": "error",
    "@typescript-eslint/no-namespace": ["error", { "allowDefinitionFiles": true }],
    '@typescript-eslint/no-this-alias': "error",
    '@typescript-eslint/no-unnecessary-qualifier': "error",
    '@typescript-eslint/no-unnecessary-type-arguments': "error",
    '@typescript-eslint/no-unnecessary-type-assertion': "error",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-use-before-define": "error",
    "@typescript-eslint/no-useless-constructor": "error",
    "@typescript-eslint/prefer-function-type": "error",
    "@typescript-eslint/prefer-includes": "error",
    "@typescript-eslint/prefer-readonly": "error",
    "@typescript-eslint/semi": "error",
    "@typescript-eslint/type-annotation-spacing": "error",
    "@typescript-eslint/restrict-plus-operands": "error",
    "@typescript-eslint/typedef": ["error", { "arrowParameter": false, }],
    "@typescript-eslint/unbound-method": "error"
  }
};