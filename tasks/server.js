// This is consider as the browserSync config

import gulp from 'gulp'
import Browser from 'browser-sync'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'

// get the config as exported
import { config as webpackConfig } from './webpack'
import { build as scssBuild } from './scss'

// initialize browserSync
const browser = Browser.create()
const bundler = webpack(webpackConfig)

export function server() {
    let config = {
        // define your site link here
        // check browserSync documentation for more into
        server: {
            baseDir: "app",
            index: "index.html"
        },
        middleware: [
            webpackDevMiddleware(bundler, {}),
            webpackHotMiddleware(bundler)
        ]
    }

    browser.init(config)

    // watch any changes on the defined path and reload browserSync
    gulp.watch('app/src/scss/**/*.scss', gulp.series(scssBuild));
    gulp.watch(['app/*.php', 'app/*.html', 'app/src/js/**/*.js', 'app/src/scss/**/*.scss']).on('change', () => browser.reload())
}