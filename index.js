module.exports = {
  'parser': '@typescript-eslint/parser',
  'extends': [
    'compono',
    'prettier',
    "prettier/@typescript-eslint"
  ],
  'plugins': [
    'import',
    '@typescript-eslint',
    'prettier'
  ],
  'rules': {
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
    "@typescript-eslint/no-unused-vars": "warn",
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": "error",
    "@typescript-eslint/array-type": ["error", "array-simple"],
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
