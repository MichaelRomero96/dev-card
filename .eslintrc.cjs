module.exports = {
    env: {
      browser: true,
      es2021: true,
    },
    extends: [
      'airbnb',
      'airbnb/hooks',
      'plugin:react/recommended',
      'plugin:react/jsx-runtime',
      'plugin:prettier/recommended',
    ],
    settings: {
      react: {
        version: 'detect',
      },
    },
    overrides: [ {
      "files": [
        "**/__tests__/**/*.[jt]s?(x)",
        "**/?(*.)+(spec|test).[jt]s?(x)"
      ],
      'extends': ["plugin:testing-library/react"]
    }],
    plugins: ['react', 'prettier', 'testing-library'],
    rules: {
      'react/react-in-jsx-scope': 0,
      'prettier/prettier': [
        'error',
        {
          endOfLine: 'auto',
        },
      ],
      'react/jsx-props-no-spreading': 0,
      'react/prop-types': 0,
      "react/require-default-props": 0,
      'react/function-component-definition': [
        0,
        {
          namedComponents: 'arrow-function',
          unnamedComponents: 'arrow-function',
        },
      ],
      'no-console': 2,
      "no-param-reassign": [
        "error",
        { "props": true, "ignorePropertyModificationsFor": ["state"] }
      ],
    },
  }