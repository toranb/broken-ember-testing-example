module.exports = function(karma) {
    karma.configure({
        basePath: 'js',

        files: [
          "vendor/jquery/jquery.min.js",
          "vendor/handlebars/handlebars.js",
          "vendor/ember/ember.js",
          "vendor/jquery-mockjax/jquery.mockjax.js",
          "app.js",
          "tests/*.js",
          "templates/*.handlebars"
        ],

        browsers: ['Chrome'],
        singleRun: false,
        autoWatch: true,

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
