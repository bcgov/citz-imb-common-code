module.exports = {
  globals: {
    module: 'readonly',
  },
  env: {
    node: true,
    browser: true,
  },
  overrides: [
    {
      files: ['__tests__/**/*'],
      env: {
        jest: true,
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  extends: [
    // By extending from a plugin config, we can get recommended rules
    // without having to add them manually.
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    // This disables the formatting rules in ESLint that Prettier is going to be responsible for handling.
    // Make sure it's always the last config, so it gets the chance to override other configs.
    'eslint-config-prettier',
  ],
  plugins: ['prettier'],
  settings: {
    react: {
      // Tells eslint-plugin-react to automatically detect the version of React to use.
      version: 'detect',
    },
    // Tells eslint how to resolve imports.
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    // Override ones from the extended configs.
    'prettier/prettier': 'error',
    'react/prop-types': 'off',
    'no-prototype-builtins': 'off',
    'no-unused-vars': 'warn',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-non-null-assertion': 'off', // Allow use of non-null assertion operator (!).
    '@typescript-eslint/no-explicit-any': 'warn', // Warn if 'any' type is used.
    'react/react-in-jsx-scope': 'off', // Don't require import of 'React' for jsx
    '@typescript-eslint/ban-types': [
      'error',
      {
        types: {
          Function: false, // Allow use of the 'Function' type.
        },
        extendDefaults: true,
      },
    ],
  },
  ignorePatterns: ['node_modules/', 'package-lock.json', 'build/'],
};
