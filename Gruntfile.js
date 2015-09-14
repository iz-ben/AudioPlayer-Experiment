/*!
 * Bootstrap's Gruntfile
 * http://getbootstrap.com
 * Copyright 2013-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

module.exports = function(grunt){
	grunt.initConfig({
		jsbanner: '/*!\n' +
			' * Coterie (http://coterie.co.ke)\n' +
			' * Copyright <%= grunt.template.today("yyyy") %>\n' +
			' * Author Ben <ben@coterie.co.ke> \n' +
			' * Modified <%= grunt.template.today("dddd, mmmm dS, yyyy, h:MM:ss TT") %>' +
			' */\n',
		watch:{
		},
		closureBuilder:{
			options:{
				// [REQUIRED] To find the builder executable we need either the path to
				//    closure library or directly the filepath to the builder:
				closureLibraryPath: 'E:/tools/google/closure/library', // path to closure library 
				// [OPTIONAL] You can define an alternative path of the builder.
				//    If set it trumps 'closureLibraryPath' which will not be required.
				builder: 'E:/tools/google/closure/library/closure/bin/build/closurebuilder.py',
				
				// [REQUIRED] One of the two following options is required: 
				//inputs: 'string|Array', // input files (can just be the entry point)
				
				// [OPTIONAL] Define the Python binary:
				//pythonBinary: '/path/to/binary/python/',
				
				// [OPTIONAL] The location of the compiler.jar
				// This is required if you set the option "compile" to true.
				compilerFile: 'E:/tools/google/closure/compiler/compiler.jar',
				// [OPTIONAL] output_mode can be 'list', 'script' or 'compiled'.
				//    If compile is set to true, 'compiled' mode is enforced. 
				//    Default is 'script'. 
				output_mode: 'compiled',
				
				// [OPTIONAL] if we want builder to perform compile 
				compile: true, // boolean 				
				
				compilerOpts: {
					/**
					 * Go wild here...
					 * any key will be used as an option for the compiler
					 * value can be a string or an array
					 * If no value is required use null
					 */
					compilation_level: 'ADVANCED_OPTIMIZATIONS',
					externs: ['E:/tools/google/closure/library/externs/*.js'],
					define: ["'goog.DEBUG=false'"],
					warning_level: 'verbose',
					//jscomp_off: ['checkTypes', 'fileoverviewTags'],
					summary_detail_level: 3,
					output_wrapper: '"(function(){%output%}).call(window);"'
				},
				// [OPTIONAL] Set exec method options
				execOpts: {
					/**
					* Set maxBuffer if you got message "Error: maxBuffer exceeded."
					* Node default: 200*1024
					*/
					maxBuffer: 999999 * 1024
				}
			},
			
			// any name that describes your operation
			createAudioManager:{
				options: {
					paths: ['src'],
					namespaces: ['audioManager'], //
				},
				// [REQUIRED] paths to be traversed to build the dependencies 
				src: ['src','E:/tools/google/closure/library/closure/goog','E:/tools/google/closure/library/lib', 'E:/tools/google/closure/library/third_party'],
				
				// [OPTIONAL] if not set, will output to stdout 
				dest: 'js/audio.manager.min.js'
			},
			createAudioPlayer:{
				options: {
					paths: ['src'],
					namespaces: ['audioPlayer'], //
				},
				// [REQUIRED] paths to be traversed to build the dependencies 
				src: ['src','E:/tools/google/closure/library/closure/goog','E:/tools/google/closure/library/lib', 'E:/tools/google/closure/library/third_party'],
				
				// [OPTIONAL] if not set, will output to stdout 
				dest: 'js/audio.player.min.js'
			}
		},
	});
	
	// Loading our grunt modules
	grunt.loadNpmTasks('grunt-closure-tools');
	
	grunt.registerTask('default', ['closureBuilder']);

};