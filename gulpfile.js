const {src, dest, parallel, series} = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const minCss = require('gulp-mini-css')

function allCss() {
    return src([
        'bower_components/bootstrap/dist/css/bootstrap.css',
        'bower_components/codemirror/lib/codemirror.css',
        'bower_components/hotbox/hotbox.css',
        'node_modules/kityminder-core/dist/kityminder.core.css',
        'bower_components/color-picker/dist/color-picker.min.css',
        'dist/kityminder.editor.min.css',
    ], {sourcemaps: false})
        .pipe(concat('all.min.css'))
        .pipe(minCss())
        .pipe(dest('./dist/css/', {sourcemaps: false}))
}


function all() {
    return src([
        'bower_components/jquery/dist/jquery.js',
        'bower_components/bootstrap/dist/js/bootstrap.js',
        'bower_components/angular/angular.js',
        'bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
        'bower_components/codemirror/lib/codemirror.js',
        'bower_components/codemirror/mode/xml/xml.js',
        'bower_components/codemirror/mode/javascript/javascript.js',
        'bower_components/codemirror/mode/css/css.js',
        'bower_components/codemirror/mode/htmlmixed/htmlmixed.js',
        'bower_components/codemirror/mode/markdown/markdown.js',
        'bower_components/codemirror/addon/mode/overlay.js',
        'bower_components/codemirror/mode/gfm/gfm.js',
        'bower_components/angular-ui-codemirror/ui-codemirror.js',
        'bower_components/marked/lib/marked.js',
        'bower_components/kity/dist/kity.min.js',
        'bower_components/hotbox/hotbox.js',
        'bower_components/json-diff/json-diff.js',
        'node_modules/kityminder-core/dist/kityminder.core.min.js',
        'bower_components/color-picker/dist/color-picker.min.js',
        'dist/kityminder.editor.min.js',
    ], {sourcemaps: false})
        .pipe(concat('all.min.js'))
        .pipe(uglify())
        .pipe(dest('./dist/js/', {sourcemaps: false}))
}

exports.default = parallel(allCss, all)
