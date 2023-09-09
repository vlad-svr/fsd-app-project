module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'standard-with-typescript', 'plugin:i18next/recommended', 'plugin:jest-dom/recommended'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'i18next', 'jest-dom'],
  rules: {
    'react/jsx-indent': [2, 4],
    'react/jsx-indent-props': [2, 4],
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/prefer-nullish-coalescing': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    'import/prefer-default-export': 'off',
    "@typescript-eslint/no-unused-vars": ["warn", { "vars": "all", "args": "after-used", "ignoreRestSiblings": false, "argsIgnorePattern": "^_" }],
    "react/jsx-props-no-spreading": 'warn',
  },
};
