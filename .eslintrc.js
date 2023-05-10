
module.exports = {
    'env': {
        'browser' : true,
        'node' : true,
        'es6' : true
    },
    'ecmaFeatures': {
        'modules': true,
        'spread' : true,
        'restParams' : true
    },
    'extends': 'eslint:recommended',
    'overrides': [
    ],
    'parserOptions': {
        'ecmaVersion': 'latest',
        'sourceType': 'module'
    },
    'rules': {
        'indent': [
            'error',
            4
        ],
        'linebreak-style': [
            'error',
            'windows'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'always'
        ]
    },
    'no-unused-vars': ['warn', { 'varsIgnorePattern': 'VARIABLE_NAME'}]
    
};
