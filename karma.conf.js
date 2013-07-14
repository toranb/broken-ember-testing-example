module.exports = function(karma) {
    karma.configure({
        basePath: 'js',

        files: [
          "vendor/jquery/jquery.min.js",
          "vendor/handlebars/handlebars.js",
          "vendor/ember/ember.js",
          "sinon.js",
          "app.js",
          "tests/*.js",
          "templates/*.handlebars"
        ],

        browsers: ['PhantomJS'],
        singleRun: true,
        autoWatch: false,

        frameworks: ["qunit"],

        plugins: [
            'karma-qunit',
            'karma-chrome-launcher',
            'karma-ember-preprocessor',
            'karma-phantomjs-launcher'
        ],

        preprocessors: {
            "**/*.handlebars": 'ember'
        }
    });
};
