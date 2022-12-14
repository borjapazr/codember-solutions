module.exports = {
  env: {
    node: true,
    es2021: true
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  globals: {
    createTestCase: 'readonly'
  },
  extends: ['airbnb-base', 'plugin:prettier/recommended', 'plugin:node/recommended'],
  rules: {
    'prettier/prettier': 'error',
    'no-unused-vars': 'warn',
    'no-console': 'off',
    'func-names': 'off',
    'no-param-reassign': 'off',
    'no-process-exit': 'off',
    'no-restricted-syntax': 'off',
    'object-shorthand': 'off',
    'class-methods-use-this': 'off',
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'import/prefer-default-export': 'off',
    'node/no-unsupported-features/es-syntax': ['error', { ignores: ['modules'] }],
    'import/extensions': 'off'
  }
};
