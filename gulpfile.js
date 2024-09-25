//Importações dos plugis do GULP
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

//Função de compressão dos aquivos JS com Gulp-uglify
function scripts(){
    return gulp.src('./src/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'))
}

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
exports.default = gulp.parallel(styles, scripts);

//função de observação
exports.watch = function(){
    //arquivos que serão observados do .scss
    gulp.watch('./src/styles/*.scss',
        //Funções que serão executadas em paralelo, no caso a função acima styles
        gulp.parallel(styles)
    )
    //gulp watch para observar arquivos do .js
    gulp.watch('./src/scripts/*.js', gulp.parallel(scripts))
}
