/*jslint node: true */
'use strict';

var grunt = require('grunt');
var checker = require('license-checker');
var output = require('./lib/output');

module.exports = function(grunt) {


  grunt.registerTask('grunt-license-report', [], function createLicenseReport() {

    // Tell grunt, that we want to do asynchronous tasks
    var done = this.async();

    // Start the license-checker, which gives back a .json file, with all found licenses
    checker.init({
      start: './'
    }, function processLicenseJson(json) {

      var fileOutputData;


      if(grunt.config.data['grunt-license-report'].output.format === 'html') {
        fileOutputData = output.createHTML(json, grunt);
      }
      else {
        fileOutputData = output.createHTML(json, grunt);
      }

      var fileOutputPath;
      if(!grunt.config.data['grunt-license-report'].output.path || !grunt.config.data['grunt-license-report'].output.format) {
        fileOutputPath = './report/licenses.html';
      }
      else {
        fileOutputPath = grunt.config.data['grunt-license-report'].output.path + '.' + grunt.config.data['grunt-license-report'].output.format;
      }

      grunt.file.write(fileOutputPath, fileOutputData);
      grunt.log.writeln('File ' + fileOutputPath + ' created.');

      // Tell grunt, that we are done with our asynchronous tasks
      done();
    });

  });
};
