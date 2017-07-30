# Certificação Bootstrap - Exercício 1 #

Atividade Prática nº 1 do curso de [Certificação Bootstrap](http://www.certificacaobootstrap.com.br/) mantido e criado por **Keven Jesus** 

**Requisitos Iniciais: Construção do Boilerplate**

### Exercício Proposto: ###
1. Compilar e minificar arquivos scss para css no diretório solicitado
2. Minificar o html e salvar no diretório solicitado
3. Definido nos comentários: unificar os arquivos

**Observação Adicional Obrigatória:** Criação de um watch para monitoramento/execução automática dos comandos.

- ### Iniciando ###

    - **Faça o clone:**
        - ```$ git clone https://github.com/RenatoSiqueira/Certificacao_Bootstrap.git```

    - **Instale os pacotes necessários:**
        - ```$ npm install```

    - **Inicie o Watch:**
        - ```$ gulp```

    - **Caso deseje, altere o nome do arquivo final**
        - ```var nomeCSS = 'template.css'```
    Obs: Será adicionada a extensão .min.css


- ### Pré-Requisitos ###
    - [NodeJs](https://nodejs.org/en/download/)
    - [Npm](https://docs.npmjs.com/cli/install)
    - Gulp:
        - ```$ npm install -g gulp```

- ### Material de Referência: ###
    - https://tableless.com.br/gulp-o-novo-automatizador/
    - http://blog.caelum.com.br/bye-bye-grunt-js-hello-gulp-js/

- ### Packages Utilizados ###
    - [Mini-Css](https://www.npmjs.com/package/gulp-mini-css/) 
    Versão 0.0.3
    - [Gulp-Sass](https://www.npmjs.com/package/gulp-sass/)
    [![Github-Release](https://img.shields.io/github/release/dlmanning/gulp-sass.svg)](https://github.com/dlmanning/gulp-sass/releases)
    - [Gulp-minify-html-2](https://www.npmjs.com/package/gulp-minify-html-2/)
    - [Gulp-concat](https://www.npmjs.com/package/gulp-concat/)    

- ### Outros Comandos ###
    - #### Comando: ```$ gulp gerar-css``` ####
    - Descrição: SASS->CSS [Conversão,Minificação,Alteração de Nome,Salvar]

    - #### Comando: ```$ gulp gerar-html``` ####
    - Descrição: HTML->HTML [Minificação,Salvar]

    - #### Comando: ```$ gulp monitor``` ####
    - Descrição: Inicia em background os observadores das pastas Source/scss/\*.scss e Source/\*.html

- ### Arquivo Completo: gulpfile.js ###
```javascript
var gulp = require('gulp')
var sass = require('gulp-sass')
var minifyCSS = require('gulp-mini-css')
var minifyHTML = require('gulp-minify-html-2')
var concatenar = require('gulp-concat')

/* Configurações */
// Localização dos Arquivos
var scss = './source/scss/*.scss'
var html = './source/*.html'

// Definição do Nome do Arquivo Final
var nomeCSS = 'template.css'

/* Código */
// SASS->CSS [Conversão,Minificação,Alteração de Nome,Salvar]
gulp.task('gerar-css',function(){
    return gulp.src(scss)
            .pipe(sass())                           // Conversão SASS->CSS
            .pipe(concatenar(nomeCSS))              // Unificação dos Arquivos CSS
            .pipe(minifyCSS({ext:'.min.css'}))      // Minificação + Alteração Nome.min.css
            .pipe(gulp.dest('./dist/css'));         // Salvando no diretório final
})

// HTML->HTML [Minificação,Salvar]
gulp.task('gerar-html',function(){
    return gulp.src(html)
            .pipe(minifyHTML())                     // Minificação
            .pipe(gulp.dest('./dist/'));            // Salvando no diretório final
})

// OBSERVADORES
gulp.task('monitor',function(){
    gulp.watch(scss,['gerar-css']);                 // Observando os arquivos SASS
    gulp.watch(html,['gerar-html']);                // Observando os arquivos HTML
})

// Inicia as funções e Ativa os Observadores
gulp.task('default',['gerar-css','gerar-html','monitor'])
```

#### Aluno #####
- [Renato Siqueira](renatoelysiqueira@gmail.com)
