export default {
    extends: ['stylelint-prettier/recommended'],
    rules: {
        'color-named': 'never',
        'block-no-empty': true,
        'no-duplicate-selectors': true,
        'no-descending-specificity': true,
        'rule-empty-line-before': 'always',
        'declaration-empty-line-before': 'never',
        'prettier/prettier': true,
    },
};
