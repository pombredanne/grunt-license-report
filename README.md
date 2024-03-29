# grunt-license-report
[![NPM version](https://badge.fury.io/js/grunt-license-report.svg)](http://badge.fury.io/js/grunt-license-report)
[![dependencies](https://david-dm.org/fkscorpion/grunt-license-report.svg)](https://david-dm.org/fkscorpion/grunt-license-report)
[![devDependency Status](https://david-dm.org/fkscorpion/grunt-license-report/dev-status.svg?theme=shields.io)](https://david-dm.org/fkscorpion/grunt-license-report#info=devDependencies)

Discovers all licenses used in one package and generates a small HTML report.

This module uses the license-checker from davglass, to search for licenses.

## Getting Started

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this task with this command:


	npm install grunt-license-report --save-dev


Once the task has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

	grunt.loadNpmTasks('grunt-license-report');

## Configuration

- `path` (mandatory): relative path to the location, where the report file will be stored and also the filename.
- `format` (not yet implemented): output format of the file, later versions will allow you, to switch between html, json etc. currently, all output is plain HTML.

        // Plugin configuration(s).
		  grunt.initConfig({
		    "grunt-License-Report": {
		      output: {
		        path: './report/licenses',
		        format:'html'
		      }
		    }
		  });

