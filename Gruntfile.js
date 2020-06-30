const sass = require("node-sass");

module.exports = function(grunt) {
  "use strict";

  require("load-grunt-tasks")(grunt);
  var productRoot = "src/redturtle/patterns/slider";
  grunt.initConfig({
    sass: {
      // Task
      dist: {
        // Target
        options: {
          // Target options
          style: "expanded"
        },
        files: {
          // Dictionary of files
          "./src/redturtle/patterns/slider/static/pattern.css": `${productRoot}/static/pattern.scss`
        }
      },
      options: {
        implementation: sass,
        sourceMap: true,
        outputStyle: "compressed"
      }
    },
    cssmin: {
      target: {
        files: {
          "./src/redturtle/patterns/slider/static/build/redturtle-patterns-slider-bundle-compiled.min.css": [
            `${productRoot}/static/pattern.css`
          ]
        }
      },
      options: {
        sourceMap: true
      }
    },
    requirejs: {
      "redturtle-patterns-slider": {
        options: {
          baseUrl: "./",
          generateSourceMaps: true,
          preserveLicenseComments: false,
          paths: {
            jquery: "empty:",
            "pat-base": "empty:",
            "collective-slick-js": "empty:",
            "redturtle-patterns-slider": `${productRoot}/static/pattern`
          },
          wrapShim: true,
          name: `${productRoot}/static/bundle.js`,
          exclude: ["jquery"],
          out: `${productRoot}/static/build/redturtle-patterns-slider-bundle-compiled.js`,
          optimize: "none"
        }
      }
    },
    uglify: {
      "redturtle-patterns-slider": {
        options: {
          sourceMap: true,
          sourceMapName: `./${productRoot}/static/build/redturtle-patterns-slider-bundle-compiled.js.map`,
          sourceMapIncludeSources: false
        },
        files: {
          "./src/redturtle/patterns/slider/static/build/redturtle-patterns-slider-bundle-compiled.js": [
            "./src/redturtle/patterns/slider/static/build/redturtle-patterns-slider-bundle-compiled.js"
          ]
        }
      }
    },
    watch: {
      scripts: {
        files: [
          `${productRoot}/static/pattern.js`,
          `${productRoot}/static/bundle.js`
        ],
        tasks: ["requirejs", "uglify"],
        options: {
          livereload: true
        }
      },
      css: {
        files: `${productRoot}/static/pattern.scss`,
        tasks: ["sass", "cssmin"],
        options: {
          livereload: true
        }
      }
    }

    // sed: {
    //   version: {
    //     path: `./${productRoot}/profiles/default/registry.xml`,
    //     pattern: '2015-02-16 00:00:00',
    //     replacement: grunt.template.today('yyyy-mm-dd 00:00:00'),
    //     recursive: false,
    //   },
    // },
  });

  grunt.registerTask("default", ["watch"]);
  grunt.registerTask("compile", ["sass", "cssmin", "requirejs", "uglify"]);
};
