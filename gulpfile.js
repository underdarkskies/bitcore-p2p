'use strict';

var gulp = require('gulp');
var ravencoreTasks = require('ravencore-build');

ravencoreTasks('p2p', {skipBrowser: true});

gulp.task('default', ['lint', 'coverage']);
