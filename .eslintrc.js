module.exports = {
  extends: [
    'plugin:vue/strongly-recommended',
    '@vue/standard'
  ],
  rules: {
    'camelcase': 0,
    'space-before-function-paren': 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 1,
    'vue/attribute-hyphenation': 0,
    'vue/html-closing-bracket-newline': 0,
    'vue/html-closing-bracket-spacing': 0,
    'vue/mustache-interpolation-spacing': 0,
    "vue/html-self-closing": ["error", {
      "html": {
        "void": "never",
        "normal": "never",
        "component": "always"
      },
      "svg": "never",
      "math": "never"
    }],
    "vue/max-attributes-per-line": ['error', {
      "singleline": 3,
      "multiline": {
        "max": 1,
        "allowFirstLine": true
      }
    }],
    'vue/multiline-html-element-content-newline': 0,
    'vue/singleline-html-element-content-newline': 0,
    'vue/require-default-prop': 0,
    "vue/order-in-components": ["error", {
      "order": [
        "el",
        "name",
        "parent",
        "functional",
        ["delimiters", "comments"],
        ["components", "directives", "filters"],
        "extends",
        "mixins",
        "inheritAttrs",
        "model",
        ["props", "propsData"],
        "data",
        "computed",
        "watch",
        "LIFECYCLE_HOOKS",
        "methods",
        ["template", "render"],
        "renderError"
      ]
    }]
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  globals: {
    '__BUILD__': true,
    '__DEV__': true,
    '__TEST__': true,
    '__PRE__': true,
    '__ONLINE__': true,
    'config': true
  }
}
