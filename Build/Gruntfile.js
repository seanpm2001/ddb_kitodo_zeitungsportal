
module.exports = function(grunt) {
    require('jit-grunt')(grunt);

    grunt.initConfig({
        less: {
            development: {
                options: {
                    sourceMap: true,
                    compress: true,
                    yuicompress: true,
                    optimization: 2
                },
                files: {
                    "Resources/Public/Css/ddbKitodoZeitungsportal.css" : "Resources/Private/Less/all.less"
                }
            }
        },
        terser: {
            development: {
                options: {
                    compress: false,
                },
                files: {
                    "Resources/Public/JavaScript/ddbKitodoZeitungsportal.js" : [
                        'Resources/Public/Javascript/OpenLayers/glif.min.js',
                        'Resources/Public/Javascript/OpenLayers/ol3-dlf.js',
                        // Viewer
                        '../dlf/Resources/Public/Javascript/PageView/Utility.js',
                        '../dlf/Resources/Public/Javascript/PageView/OL3.js',
                        '../dlf/Resources/Public/Javascript/PageView/OL3Styles.js',
                        '../dlf/Resources/Public/Javascript/PageView/OL3Sources.js',
                        '../dlf/Resources/Public/Javascript/PageView/AltoParser.js',
                        '../dlf/Resources/Public/Javascript/PageView/AnnotationParser.js',
                        '../dlf/Resources/Public/Javascript/PageView/AnnotationControl.js',
                        '../dlf/Resources/Public/Javascript/PageView/ImageManipulationControl.js',
                        '../dlf/Resources/Public/Javascript/PageView/FulltextDownloadControl.js',
                        'Resources/Private/JavaScript/Kitodo/PageView/FulltextControl.js',
                        '../dlf/Resources/Public/Javascript/PageView/FullTextUtility.js',
                        '../dlf/Resources/Public/Javascript/PageView/PageView.js'
                    ],
                }
            }
          },
        watch: {
            styles: {
                files: ['Resources/Private/Less/**/*.less'],
                tasks: ['less'],
                options: {
                    nospawn: true
                }
            },
            js: {
                files: ['Resources/Private/JavaScript/*.js'],
                tasks: ['terser']
            }
        }
    });

    grunt.file.setBase('../')
    grunt.registerTask('default', ['terser','watch']);
};