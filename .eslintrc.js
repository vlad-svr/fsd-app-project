module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
      'plugin:react/recommended',
      'standard-with-typescript',
      'plugin:i18next/recommended',
      'plugin:jest-dom/recommended',
      'plugin:storybook/recommended',
      'plugin:react-hooks/recommended'
  ],
  overrides: [
    {
      files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
      rules: {
          'i18next/no-literal-string': 'off',
          'max-len': 'off'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
      'react',
      'i18next',
      'jest-dom',
      'react-hooks',
      'eslint-plugin-storybook',
      'vlad-custom-plugin'
  ],
  rules: {
    'react/jsx-indent': [2, 4],
    'react/jsx-indent-props': [2, 4],
    'react/react-in-jsx-scope': 'off',
    'react/display-name': 'off',
    'react/jsx-props-no-spreading': 'off',
    '@typescript-eslint/prefer-nullish-coalescing': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-misused-promises': 'off',
    '@typescript-eslint/no-dynamic-delete': 'off',
    '@typescript-eslint/no-invalid-void-type': 'off',
    '@typescript-eslint/consistent-type-imports': 'off',
    'n/no-callback-literal': 'off',
    'import/prefer-default-export': 'off',
    '@typescript-eslint/promise-function-async': 'off',
    '@typescript-eslint/no-unused-vars': ['warn', { vars: 'all', args: 'after-used', ignoreRestSiblings: false, argsIgnorePattern: '^_' }],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error",
    "vlad-custom-plugin/path-checker": ["error", {alias: '@'}],
    "vlad-custom-plugin/layer-imports": [
        "error",
        {
            alias: '@',
            ignoreImportPatterns: ['**/StoreProvider', '**/testing']
        }
    ],
    "vlad-custom-plugin/public-api-import": [
        "error",
        {
            alias: '@',
            testFilesPatterns: ['**/*.test.*', '**/*.story.*', '**/StoreDecorator.tsx']
        }
    ]
  },
  "settings": {
    "react": {
      "version": "detect",
    },
  }
}
