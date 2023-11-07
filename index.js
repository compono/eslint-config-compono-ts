const prettierConfig = require('./.prettierrc');

module.exports = {
  'parser': '@typescript-eslint/parser',
  'extends': [
    'airbnb-base',
    'compono',
    'prettier',
  ],
  'plugins': [
    'import',
    '@typescript-eslint',
    'prettier'
  ],
  'rules': {
    // http://eslint.org/docs/rules/quotes
    quotes: [
      2,
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],

    // http://eslint.org/docs/rules/comma-dangle
    'comma-dangle': 'off',

    // http://eslint.org/docs/rules/strict
    strict: [0],

    'generator-star-spacing': [
      'error',
      {
        before: true,
        after: false,
      },
    ],

    // http://eslint.org/docs/rules/no-param-reassign
    // http://eslint.org/docs/rules/no-use-before-define
    'no-confusing-arrow': ['error', { allowParens: false }],
    'no-use-before-define': [2, { functions: false }],
    'no-param-reassign': [2, { props: false }],
    'no-await-in-loop': 'off',
    'no-multi-assign': 'off',
    'no-plusplus': 'off',

    'arrow-parens': 'off',
    'func-names': 0,

    'prettier/prettier': ['error', prettierConfig],
    'max-len': [
      'error',
      {
        code: 100,
        comments: 100,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],

    'no-shadow': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'class-methods-use-this': 'off',
    'no-useless-constructor': 'off',
    'no-underscore-dangle': 'off',
    'no-empty-function': 'off',
    'no-undef': 'off',
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "error",
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": "error",
    "@typescript-eslint/array-type": ["error", { default: 'array-simple' }],
    "no-restricted-syntax": [
      "error",
      "ForInStatement",
      "LabeledStatement",
      "WithStatement"
    ],
    'lines-between-class-members': [
      'error',
      'always',
      {
        'exceptAfterSingleLine': true
      }
    ]
  },
  'settings': {
    'import/resolver': {
      'node': true,
      'eslint-import-resolver-typescript': true
    }
  }
}
