document.write('<div id="ember-testing-container"><div id="ember-testing"></div></div>');

Ember.testing = true;

App.rootElement = '#ember-testing';
App.setupForTesting();
App.injectTestHelpers();

window.exists = exists;

Ember.Container.prototype.stub = function(fullName, instance) {
    instance.destroy = instance.destroy || function() {};
    this.cache.dict[fullName] = instance;
};

function exists(selector) {
    return !!find(selector).length;
}

function missing(selector) {
    var error = "element " + selector + " found (should be missing)";
    throws(function() { find(selector); }, error);
}

function stubEndpointForHttpRequest(server, people) {
    var json = JSON.stringify(people);
    var content = {"Content-Type": "application/json"};
    server.respondWith("GET", "/api/people", function(request) {
        Ember.run(function() {
            request.respond(200, content, json);
        });
    });
}
