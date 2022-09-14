const { src, dest, watch, series } = require('gulp');
const postcss = require('gulp-postcss');
// const sharpResponsive = require("gulp-sharp-responsive");

const cssnano = require('cssnano');
const terser = require('gulp-terser');
const autoprefixer = require('autoprefixer');
const browsersync = require('browser-sync').create();
const sass = require('gulp-sass')(require('sass'));

// Sass Task
function scssTask(){
    return src('src/scss/styles.scss', {sourcemaps : true})
    .pipe(sass())
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(dest('dist/css/styles.css', {sourcemaps: '.'}));
}

// Js Task
function jsTask(){
    return src('src/js/**/*.js', {sourcemaps : true})
    .pipe(terser())
    .pipe(dest('dist/main.js', {sourcemaps: '.'}));

}



// Brosersync Tasks
function browsersyncServe(cb){
    browsersync.init({
        server: {
            baseDir: '.'
        }
    });
    cb();

}

function browsersyncReload(cb){
    browsersync.reload();
    cb();
}

//Sharp Responsive Task

//const img = () => src("src/assets/images/**/*.{jpg,png}")
/*  .pipe(sharpResponsive({
    formats: [
      { width: 440, jpegOptions: { quality: 70, progressive: true }, rename: { suffix: "-sm" } },
      { width: 740, jpegOptions: { quality: 70, progressive: true }, rename: { suffix: "-md" } },
      { width: 1024, jpegOptions: { quality: 70, progressive: true }, rename: { suffix: "-lg" } },
      { width: 1800, jpegOptions: { quality: 70, progressive: true }, rename: { suffix: "-xl" } },
    ]
  }))
  .pipe(dest("dist/images"));
 */ 

// Watch Task
function watchTask(){
    //watch('*html', browsersyncReload);
    watch(['*html, src/scss/**/*.scss', 'src/js/**/*.js']), series(scssTask, jsTask 
        //browsersyncReload
        );

}

// Default Gulp Task
exports.default = series(
    scssTask,
    jsTask,
   // img,
    //browsersyncServe,    
    watchTask
)