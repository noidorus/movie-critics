// eslint.config.js
// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default [
  {
    ignores: ['node_modules/', 'dist/', '*.config.js'],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      '@typescript-eslint/no-unused-vars': 'error',
      'object-shorthand': ['error', 'always'],
      curly: ['error', 'all'],
      '@typescript-eslint/no-redeclare': 'error',
      quotes: ['error', 'single'],
      'keyword-spacing': ['error', { before: true, after: true }],
      eqeqeq: ['error', 'always'],
      'no-unreachable': 'error',
      'prefer-const': 'error',
      'block-scoped-var': 'error',
      'no-var': 'error',
      'no-nested-ternary': 'error',
      'max-depth': ['error', 4],
    },
  },
];
