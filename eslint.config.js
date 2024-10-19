import react from 'eslint-plugin-react';
import tseslint from 'eslint-plugin-typescript-eslint';

export default tseslint.config({
    languageOptions: {
        parserOptions: {
            project: ['./tsconfig.node.json', './tsconfig.app.json'],
            tsconfigRootDir: import.meta.dirname,
        },
    },
    settings: {
        react: {
            version: '18.3',
        },
    },
    plugins: {
        react,
        'typescript-eslint': tseslint,
    },
    rules: {
        ...react.configs.recommended.rules,
        ...react.configs['jsx-runtime'].rules,
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
});
