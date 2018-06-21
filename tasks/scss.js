import gulp from 'gulp'
import Browser from 'browser-sync'
import sass from 'gulp-sass'
import rename from 'gulp-rename'

const browser = Browser.create()

// Our scss source folder: .scss files
const config = {
    in: './app/src/scss/main.scss',
    out: './app/dist/css/',
    sassOpts: {
        outputStyle: 'nested',
        precison: 3,
        errLogToConsole: true
    },
    // filename of the css output
    filename: 'style'
};

function build() {
    return gulp.src(config.in)
        .pipe(sass(config.sassOpts).on('error', sass.logError))
        .pipe(rename(config.filename + '.css'))
        .pipe(gulp.dest(config.out))
        .pipe(browser.stream());
}

export { build }