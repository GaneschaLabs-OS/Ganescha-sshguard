module.exports = function (grunt) { 'use strict';
require('time-grunt')(grunt);
require('load-grunt-tasks')(grunt, { scope: 'devDependencies' });

const gruntfilePath = 'Gruntfile.js';
const readmePath = './README.md';
const defaultGrunt = [
    'merge-conflict',
    'markdownlint',
    'markdown_toc',
    'md_link_checker',
    'grunt-license-report',
    'exec:dockerBuildImage',
    'exec:dockerPushImage',
    'exec:dockerRemoveImage',
    'cowsay'
];
const noDocker = [
    'merge-conflict',
    'markdownlint',
    'markdown_toc',
    'md_link_checker',
    'grunt-license-report',
    'cowsay'
];

grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    "merge-conflict": {
        files: [
            gruntfilePath
        ]
    },

    "grunt-license-report": {
        output: {
            path: './report/licenses',
            format: 'html'
        }
    },
    
    md_link_checker: {
        src: [readmePath],
        options: {
            tokenFilePath: '~/.token',
        }
    },
    
    markdown_toc: {
        src: [readmePath]
    },
    
    markdownlint: {
        full: {
            options: {
                config: { //configure the linting rules
                    'default': true,
                    'line-length': false,
                    'blanks-around-headers': false,
                    'no-duplicate-header': false,
                    'no-inline-html': false,
                    'MD004': false,
                    'MD042': false
                }
            },
            src: [readmePath]
        }
    },

    exec: {
        dockerBuildImage: 'docker build -t ganescha/ganescha-sshguard .',
        dockerPushImage: 'docker push ganescha/ganescha-sshguard',
        dockerRemoveImage: 'docker rmi ganescha/ganescha-sshguard'
    },
    
    cowsay: {
        moo: {
            options: {
                message: 'Grunt done without errors!',
                mood: (function () {
                    const array = ['b', 'd', 'g', 'p', 's', 't', 'w', 'y'];
                    
                    function random (min, max) {
                        return Math.floor(Math.random() * (max - min + 1) + min);
                    }
                    
                    return array[random(0, array.length - 1)];
                }())
            }
        }
    },
    
    'minor-major-milestone': {
        minor: {
            options: { elem: 'minor' }
        },
        major: {
            options: { elem: 'major'}
        },
        milestone: {
            options: { elem: 'milestone'}
        }
    }
});

// ---------------------------- Tasks ----------------------------
grunt.registerTask('default', defaultGrunt);
grunt.registerTask('noDocker', noDocker);

grunt.registerTask('minor', ['minor-major-milestone:minor']);
grunt.registerTask('major', ['minor-major-milestone:major']);
grunt.registerTask('milestone', ['minor-major-milestone:milestone']);
};
