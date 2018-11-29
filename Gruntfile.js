require('dotenv').config();

module.exports = (grunt) => {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    awskey: process.env.S3_KEY,
    awssecret: process.env.S3_SECRET,
    awsbucket: process.env.S3_BUCKET,

    aws_s3: {
      options: {
        accessKeyId: '<%= awskey %>',
        secretAccessKey: '<%= awssecret %>',
        region: 'us-east-2',
        uploadConcurrency: 5,
        downloadConcurrency: 5,
      },
      staging: {
        options: {
          bucket: '<%= awsbucket %>',
        },
        files: [
          {
            expand: true,
            cwd: 'public/dist/',
            src: 'bundle.js',
            dest: 'dist/',
          },
          {
            expand: true,
            cwd: 'public/dist/',
            src: 'server.js',
            dest: 'dist/',
          },
          {
            expand: true,
            cwd: 'public/dist/',
            src: 'styles.css',
            dest: 'dist/',
          },
        ],
      },
    },
  });

  grunt.loadNpmTasks('grunt-aws-s3');

  // Default task(s).
  grunt.registerTask('default', ['aws_s3']);
};
