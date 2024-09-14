//Importações dos plugis do GULP
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');

//Funções de configuração dos plugins
function styles(){
    return gulp.src('./src/styles/*.scss')
    .pipe(sass({outputStyle:'compressed'}))
    .pipe(gulp.dest('dist/css'));
}

// function images(){
//     return gulp.src('./src/images/**/*') //2 asteriscos é para acessar todas as pastas e /* pegar todas extensões
//     .pipe(imagemin())
//     .pipe(gulp.dest('./dist/images'));
// }

//Exports das funções
exports.default = gulp.parallel(styles);

//função de observação
exports.watch = function(){
    //arquivos que serão observados
    gulp.watch('./src/styles/*.scss',
        //Funções que serão executadas em paralelo, no caso a função acima styles
        gulp.parallel(styles)
    )
}
