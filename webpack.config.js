const path = require('path');

module.exports = {
    entry: './index.js',
    mode: 'production',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        libraryTarget: 'umd',
        library: 'upsideDown',
        libraryExport: "default"
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    // The `injectType`  option can be avoided because it is default behaviour
                    { loader: 'style-loader', options: { injectType: 'styleTag' } },
                    'css-loader',
                  ]
            },
        ],
    }
}