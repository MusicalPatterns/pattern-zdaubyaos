const config = require('../../../test/jasmine')

module.exports = {
    ...config,
    spec_files: [
        "test/src/**/*.ts",
        "test/src/**/*.js",
        "test/src/**/*.tsx",
        "test/src/**/*.jsx",
        'src/zdaubyaos/test/src/**/*.ts',
        'src/zdaubyaos/test/src/**/*.js',
        'src/zdaubyaos/test/src/**/*.tsx',
        'src/zdaubyaos/test/src/**/*.jsx',
    ],
}
