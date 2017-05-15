'use strict';
 var gulp = require('gulp');
 var gutil = require('gulp-util');
 var concat = require('gulp-concat');
 var uglify = require('gulp-uglify');
 var sourcemaps = require('gulp-sourcemaps');
 var rimraf = require('rimraf');
 var wrap = require('gulp-wrap');
var webpack = require('webpack');
var fs = require('fs');
var fse = require('fs-extra')
var extend = require('extend');
var async = require('async');
var props = require('gulp-props');

// var gulp   = require('gulp'),
//     concat = require('gulp-concat'),
//     uglify = require('gulp-uglify'),
//     rename = require('gulp-rename'),
//     sass   = require('gulp-sass'),
//     maps   = require('gulp-sourcemaps');

var bases = {
 app: 'src/',
 dist: 'dist/',
};

var config = {
  properties:{
      dist : bases.dist,
      parents: [
                {
                    "name" : "aris-core-ui",
                    "prefix": "./node_modules/aris-core-ui/properties/"
                },
                {
                    "name" : "ebiz-core-ui",
                    "prefix": "./properties/"
                }
              ]
  }
};

var paths = {
     javascript1: ['./src/**/*.js', '!./lib/**/*.js', '!./src/index*.js','!./src/e2etests/*'],
     javascript: [],
     inpFiles: [],
     styles: ['./src/**/*.css'],
     html: ['./src/**/*.html', './src/**/*.{gif,png,jpg,jpeg}'],
     images: ['./src/**/*.{gif,png,jpg,jpeg}','./src/**/fonts/*']
   };

var outputPaths = {
     'javascript': './dist/js'
   };

var minifiedJsFileName = 'gulpbundle.min.js';

gulp.task("gatherjs", [], function(cb){
  var ended = false;
  paths.inpFiles =[];
  var instream = require('fs').createReadStream('./src/index.webpack.js')
  instream.on('end', () => { ended = true });

  var lineReader = require('readline').createInterface({
    input: instream
  });
  
  lineReader.on('line', function (line) {
    line = line.trim();
    if(/^\/\//.test(line.trim()) ) {

    }else if(line.trim() === "") {

    } else { 
      var s =  line.match(/require\(["']script\-loader\!\.\/(.*?)['"]\);/);
      paths.inpFiles.push('./src/'+s[1]);
      if(ended) {
        cb();
        gutil.log('Num input files:', paths.inpFiles.length, paths.javascript.length);
      }
    }
  });
  
});

gulp.task('build-js', ['gatherjs'], function() {
 return gulp.src(paths.inpFiles) //paths.javascript
   .pipe(wrap('//<%= file.path %>\n<%= contents %>;'))
   .pipe(sourcemaps.init())
   .pipe(concat(minifiedJsFileName))
//avoid minimification   
    // .pipe(uglify())
   .pipe(sourcemaps.write('./'))
   .pipe(gulp.dest(outputPaths.javascript));
});

gulp.task("clean", function (cb) {
     // rimraf(outputPaths.javascript + '/' + minifiedJsFileName, cb);
     rimraf(bases.dist + '/**', cb);
   });



gulp.task('copy', [], function() {
  gulp.src(paths.html)//, {cwd: bases.app}
 .pipe(gulp.dest(bases.dist));

 // Copy styles
 gulp.src(paths.styles)
  .pipe(sourcemaps.init())
  .pipe(concat('styles.min.css'))
  .pipe(sourcemaps.write('./'))
  .pipe(gulp.dest(bases.dist + 'css'));

 // Copy lib scripts, maintaining the original directory structure
 gulp.src(paths.images)
 .pipe(gulp.dest(bases.dist));
});

gulp.task('properties', function() {
    console.log(config);
    if (!fs.existsSync(config.properties.dist)){
      fs.mkdirSync(config.properties.dist); 
    }
    if (fs.existsSync(config.properties.dist+"properties"))
      deleteFolderRecursive(config.properties.dist+"properties")   
    fs.mkdirSync(config.properties.dist+"properties"); 
    for(var i=0; i<config.properties.parents.length; i++){
      (function(i) {
      var fileList = fs.readdirSync(config.properties.parents[i].prefix);
      for(var j=0; j<fileList.length; j++){
        if (!fs.existsSync(config.properties.dist+"properties/"+fileList[j])) {
          fse.copySync(config.properties.parents[i].prefix+""+fileList[j], config.properties.dist+"properties/"+fileList[j]);
        }
        else{
          var parent = JSON.parse(fs.readFileSync(config.properties.dist+"properties/"+fileList[j]));
          var child = JSON.parse(fs.readFileSync(config.properties.parents[i].prefix+""+fileList[j]));
          fs.writeFileSync(config.properties.dist+"properties/"+fileList[j], JSON.stringify(extend(true,parent, child)));
        }
      }
    })(i);
  }
  var deleteFolderRecursive = function(path) {
    if( fs.existsSync(path) ) {
      fs.readdirSync(path).forEach(function(file,index){
        var curPath = path + "/" + file;
        if(fs.lstatSync(curPath).isDirectory()) { // recurse
          deleteFolderRecursive(curPath);
        } else { // delete file
          fs.unlinkSync(curPath);
        }
      });
      fs.rmdirSync(path);
    }
  };
});

gulp.task("translations", [], function(){
  gulp.src(bases.app+'/core/translation/*en-gb.properties')
    .pipe(props({ namespace: 'translation_en_gb' }))
    .pipe(gulp.dest(bases.dist))
  gulp.src(bases.app+'/core/translation/*es-es.properties')
    .pipe(props({ namespace: 'translation_es_es' }))
    .pipe(gulp.dest(bases.dist))
});

gulp.task('webpack',['clean'], function(done){
  webpack(require('./webpack.config.js')).run(function(err, stats) {
    if(err) {
      console.log('Error', err);
    }
    else {
      console.log(stats.toString());
    }
    done();
  });
});
 
gulp.task('watch', function() {
  var watcher = gulp.watch([bases.app+'/**/*.js',paths.html,paths.styles, paths.images], ['buildall']);
  watcher.on('change', function(event) {
    console.log('File ' + event.path + ' was ' + event.type);
  });
});

// gulp.task('default', ['clean', 'copy', 'build-js', 'webpack']);

gulp.task('buildall', ['translations', 'copy','build-js']);

gulp.task('default', ['clean', 'webpack'], function () {
  gulp.start('buildall');
});

// gulp.task('concatScripts', function() {
//   return gulp.src([
//     'js/jquery.js',
//     'js/sticky/jquery.sticky.js',
//     'js/main.js'])
//   .pipe(maps.init())
//   .pipe(concat('app.js'))
//   .pipe(maps.write('./'))
//   .pipe(gulp.dest('js'));
// });

// gulp.task('minifyScripts', ['concatScripts'], function() {
//   return gulp.src('js/app.js')
//   .pipe(maps.init())
//   .pipe(uglify())
//   .pipe(rename('app.min.js'))
//   .pipe(maps.write('./'))
//   .pipe(gulp.dest('js'));
// });

// gulp.task('compileSass', function() {
//   return gulp.src('scss/application.scss')
//   .pipe(maps.init())
//   .pipe(sass())
//   .pipe(maps.write('./'))
//   .pipe(gulp.dest('css'));
// });

// gulp.task('default', ['concatScripts', 'minifyScripts', 'compileSass'], function() {
//   console.log("This is the default task!");
// });