const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function styles(){
    return gulp.src('./src/styles/*.scss')
    .pipe(sass({outputStyle:'compressed'}))
    .pipe(gulp.dest('dist/css'));
}

exports.default = styles;

//função de observação
exports.watch = function(){
    //arquivos que serão observados
    gulp.watch('./src/styles/*.scss',
        //Funções que serão executadas em paralelo, no caso a função acima styles
        gulp.parallel(styles)
    )
}
