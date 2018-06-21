// This is consider as the gulpfile.js as defined in the package.json using babel-register

import gulp from 'gulp'

import { scripts } from './webpack'
import { server } from './server'
import { build as scssBuild } from './scss'

export const dev = gulp.series(gulp.parallel(scssBuild, scripts), server)
export const build = gulp.series(scripts)

// setting the dev as its default export
export default dev
