// Based on https://scottspence.com/posts/stylelint-configuration-for-tailwindcss
module.exports = {
  extends: ['stylelint-config-standard'],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'tailwind',
          'apply',
          'variants',
          'responsive',
          'screen',
        ],
      },
    ],
    'declaration-block-trailing-semicolon': null,
    'no-descending-specificity': null,
    'alpha-value-notation': 'number', // https://github.com/cssnano/cssnano/issues/892 solve bug 50% -> 1%
  },
}
