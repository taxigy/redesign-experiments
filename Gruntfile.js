var grunt = require('grunt');

grunt.initConfig({
    sass: { // Task
        dist: { // Target
            options: { // Target options
                style: 'expanded'
            },
            files: { // Dictionary of files
                'main.css': '_experiment.scss' // 'destination': 'source'
            }
        }
    }
});

grunt.loadNpmTasks('grunt-contrib-sass');

grunt.registerTask('default', ['sass']);

