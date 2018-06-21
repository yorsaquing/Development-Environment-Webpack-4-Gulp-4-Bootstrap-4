// This is consider as the webpack.config.js as defined in the package.json using babel-register

import path from 'path'
import webpack from 'webpack'
import process from 'process'

// to check if the environment is production or development
const isProduction = (process.env.NODE_ENV === 'production')

let jsPath = {
    in: './src/js',
    out: './dist/js'
}

let config = {
    mode: 'development',
    entry: {
        main: jsPath.in + '/pages/index.js',
        about: jsPath.in + '/pages/about.js'
    },
    watch: true,
    output: {
        path: path.resolve(__dirname, '../app/dist/js/pages/'),
        filename: '[name].bundle.js'
    },
    context: path.resolve(__dirname, '../app'),
    plugins: isProduction ? [ new webpack.HotModuleReplacementPlugin() ] : [],
    optimization: {
        occurrenceOrder: true
    }
}

function scripts() {
    return new Promise(resolve => webpack(config, (err, stats) => {

        if (err) console.log('Webpack', err)

        console.log(stats.toString())
        
        resolve()
    }))
}

module.exports = { config, scripts }