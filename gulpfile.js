const gulp = require("gulp");
const sass = require("gulp-sass");
const browserSync = require("browser-sync").create();

// compile scss into css
function style() {
  //1. Vind css file
  return (
    gulp
      .src("./src/scss/**/*.scss")
      //2. file door sass compiler laten gaan
      .pipe(sass())
      //3. CSS file opslaan op locatie
      .pipe(gulp.dest("./src//css"))
      //4. Stream changes to all browsers
      .pipe(browserSync.stream())
  );
}

function watch() {
  browserSync.init({
    server: {
      baseDir: "./",
    },
  });
  gulp.watch("./src/scss/**/*.scss", style);
  gulp.watch("./*.html").on("change", browserSync.reload);
  gulp.watch("./src/js/**/*.js").on("change", browserSync.reload);
}

exports.style = style;
exports.watch = watch;
