var gulp = require('gulp');
var sass = require('gulp-sass');
var minify = require('gulp-mini-css');

// Localização dos Arquivos
var scss = "./source/scss/*.scss";
var html = "./source/*.html";

// SASS->CSS [Conversão,Minificação,Alteração de Nome,Salvar]
gulp.task('gerar-css',function(){
    return gulp.src(scss)
            .pipe(sass())                       // Conversão SASS->CSS
            .pipe(minify({ext:'.min.css'}))     // Minificação + Alteração Nome.min.css
            .pipe(gulp.dest('./dist/css'));     // Salvando no diretório final
});

// HTML->HTML [Minificação,Salvar]
gulp.task('gerar-html',function(){
    return gulp.src(html)
            .pipe(minify())                     // Minificação
            .pipe(gulp.dest('./dist/'));        // Salvando no diretório final
});

// OBSERVADORES
gulp.task('monitor',function(){
    gulp.watch(scss,['gerar-css']);             // Observando os arquivos SASS
    gulp.watch(html,['gerar-html']);            // Observando os arquivos HTML
});

// Inicia as funções e Ativa os Observadores
gulp.task('default',['gerar-css','gerar-html','monitor']); 