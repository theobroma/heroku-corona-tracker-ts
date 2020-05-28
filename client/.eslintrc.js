// .eslintrc.js
module.exports = {
  extends: ['airbnb-typescript-prettier', 'plugin:jest/recommended'],
  rules: {
    'no-param-reassign': 0,
    '@typescript-eslint/no-use-before-define': 0,
    'no-console': 0,
    'react/state-in-constructor': 0,
  },
  env: {
    'jest/globals': true,
  },
};
