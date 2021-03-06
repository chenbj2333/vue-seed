module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', '@vue/airbnb', 'prettier', 'plugin:prettier/recommended'],
  rules: {
    'prettier/prettier': 'error',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-tabs': 0,
    'lines-between-class-members': 'off',
    'no-underscore-dangle': 0,
    'comma-dangle': 0,
    'linebreak-style': 0,
    semi: [2, 'never'],
    'no-nested-ternary': 0,
    'class-methods-use-this': 0,
    'object-curly-newline': 0,
    'no-undef': 0,
    'prefer-const': 0,
    camelcase: 0,
    'no-console': 0,
    'space-before-function-paren': [0, 'never'],
    'spaced-comment': [1, 'always'],
    indent: 0,
    'object-shorthand': 0,
    'func-names': 0,
    'consistent-return': 1,
    'max-len': [1, 120, 2],
    'no-use-before-define': 1,
    'no-labels': 1,
    'no-param-reassign': [
      2,
      {
        props: false
      }
    ],
    'no-loop-func': 1,
    'prefer-arrow-callback': 0,
    'global-require': 0,
    'no-new': 0,
    'no-else-return': 0,
    'import/prefer-default-export': 0,
    'import/no-unresolved': 0,
    'import/no-dynamic-require': 0,
    'import/extensions': 0,
    'import/no-extraneous-dependencies': 0
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
