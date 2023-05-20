module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
    project: true,
    tsconfigRootDir: __dirname,
  },
  plugins: ['react', '@typescript-eslint', 'unused-imports'],
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'react-app',
    'react-app/jest',
    'prettier',
  ],
  settings: {
    'import/resolver': {
      typescript: true,
      node: true,
    },
    'import/extensions': ['.ts', '.tsx'],
  },
  overrides: [
    {
      files: ['**/*.stories.*'],
      rules: {
        'import/no-anonymous-default-export': 0,
        '@typescript-eslint/naming-convention': 0,
      },
    },
  ],
  rules: {
    // Configs from ESLint
    eqeqeq: [2, 'smart'],
    'no-unused-vars': 0,
    'no-use-before-define': 0,
    'consistent-return': [2, { treatUndefinedAsUnspecified: true }],
    'default-case': 2,
    'default-case-last': 2,
    'func-style': [2, 'declaration', { allowArrowFunctions: true }],
    'no-console': 2,
    'no-else-return': [2, { allowElseIf: false }],
    'no-useless-return': 2,
    'arrow-parens': [2, 'always'],
    'no-nested-ternary': 2,

    // Configs from TSLint
    '@typescript-eslint/no-unused-vars': 0,
    '@typescript-eslint/no-use-before-define': [
      2,
      { enums: true, typedefs: true, ignoreTypeReferences: false },
    ],
    '@typescript-eslint/array-type': [2, { default: 'generic', readonly: 'generic' }],
    '@typescript-eslint/consistent-indexed-object-style': [2, 'record'],
    '@typescript-eslint/consistent-type-definitions': [2, 'interface'],
    '@typescript-eslint/method-signature-style': 2,
    // '@typescript-eslint/no-unsafe-argument': 2, // "plugin:@typescript-eslint/recommended-requiring-type-checking" enables this rule by default
    // '@typescript-eslint/no-unsafe-assignment': 2, // "plugin:@typescript-eslint/recommended-requiring-type-checking" enables this rule by default
    // '@typescript-eslint/no-unsafe-call': 2, // "plugin:@typescript-eslint/recommended-requiring-type-checking" enables this rule by default
    '@typescript-eslint/consistent-type-assertions': [
      2,
      { assertionStyle: 'as', objectLiteralTypeAssertions: 'never' },
    ],
    '@typescript-eslint/consistent-type-exports': 2,
    '@typescript-eslint/consistent-type-imports': 2,
    '@typescript-eslint/naming-convention': [
      2,
      // this configuration is for "boolean" variable naming convention
      {
        selector: 'variable',
        types: ['boolean'],
        format: ['PascalCase'],
        prefix: ['is', 'should', 'has', 'can'],
      },
      // this configuration is for React component naming convention. Note that "filter" is applied here.
      // Be sure to prefix the name of the setter of "useState" hook with "set" and also be sure to prefix
      // the name of each handler function of a React component with "handle". Otherwise, you will receive
      // lint error that says that variable name nust follow the format: PascalCase.
      // ----- Until finding a better linting rule for setter name of "useState" hook and functions of component,
      //       this rule is used.
      {
        selector: 'variable',
        types: ['function'],
        modifiers: ['const'],
        format: ['PascalCase'],
        filter: {
          regex: '^(handle|set)',
          match: false,
        },
      },
      // this configuration is for all "const" defined variable naming convention except for React component name and boolean type variable
      {
        selector: 'variable',
        modifiers: ['const'],
        format: ['UPPER_CASE', 'camelCase'],
      },
      // this configuration disables naming convention check for destructured object propert(y/ies)
      {
        selector: 'variable',
        modifiers: ['destructured'],
        format: null,
      },
      // this configuration is for "enum" variable naming convention
      {
        selector: 'enum',
        format: ['PascalCase', 'UPPER_CASE'],
      },
      { selector: 'parameter', format: ['camelCase'] }, // this configuration is for function "parameter" naming convention
      // this configuration is for "interface" naming convention.
      // NOTE THAT, the following will no effect if '@typescript-eslint/consistent-type-definitions' rule is defined as [2, "type"] in "rules" section above
      {
        selector: 'interface',
        format: ['PascalCase'],
        custom: {
          regex: '^I[A-Z]',
          match: true,
        },
      },
    ],

    // Configs from "eslint-plguin-import" plugin
    'import/exports-last': 2,
    'import/group-exports': 2,
    'import/no-anonymous-default-export': 2,
    'import/prefer-default-export': 2,
    'import/no-unassigned-import': 2,
    'import/no-duplicates': [2, { 'prefer-inline': false }],

    // Configs from plugin
    'unused-imports/no-unused-imports': 2,
    'unused-imports/no-unused-vars': [2, { vars: 'all', args: 'all' }],

    // Configs from "eslint-plugin-react" plugin
    'react/jsx-uses-react': 2,
    'react/jsx-uses-vars': 2,
  },
}
