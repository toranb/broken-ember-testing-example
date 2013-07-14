module('integration tests', {
    setup: function() {
        Ember.testing = true;
        this.server = sinon.fakeServer.create();
        this.server.autoRespond = true;
        Ember.run(App, App.advanceReadiness);
    },
    teardown: function() {
        this.server.restore();
        App.reset();
        App.Person.people = [];
    }
});

var generatePeopleArray = function() {
    var matt = {firstName: 'matt', lastName: 'morrison'};
    var toran = {firstName: 'toran', lastName: 'billups'};
    return [matt, toran];
};

test('go time', function() {
    console.log("Y");
    stubEndpointForHttpRequest(this.server, []);
    visit("/").then(function() {
        ok(find("table"));
        throws(
          function() {
            find("table tr") ;
          },
          "OMG"
        );
    });
    console.log("YEND");
});

test('view will render models in html table', function() {
    console.log("X START");
    var people = generatePeopleArray();
    stubEndpointForHttpRequest(this.server, people);
    visit("/").then(function() {
        var rows = find("table tr").length;
        equal(rows, 2, rows);
    });
    console.log("XEND");
});

test('more go', function() {
    console.log("Z");
    stubEndpointForHttpRequest(this.server, []);
    visit("/").then(function() {
        ok(find("table"));
        throws(
          function() {
            find("table tr") ;
          },
          "OMG"
        );
    });
    console.log("ZEND");
});

test('view is awesome', function() {
    console.log("LAST START");
    var matt = {firstName: 'matt', lastName: 'morrison'};
    stubEndpointForHttpRequest(this.server, [matt]);
    visit("/").then(function() {
        var rows = find("table tr").length;
        equal(rows, 1, rows);
    });
    console.log("LAST END");
});


// test('add will append another person to the html table', function() {
//     //var people = generatePeopleArray();
//     //stubEndpointForHttpRequest(this.server, people);
//     visit("/").then(function() {
//         var rows = find("table tr").length
//         equal(rows, 2, rows);
//     });
        // equal(find("table tr:eq(0) td:eq(0)").text(), "matt morrison", "the first row was incorrect");
        // equal(find("table tr:eq(1) td:eq(0)").text(), "toran billups", "the second row was incorrect");
        // fillIn(".firstName", "dustin");
        // fillIn(".lastName", "thostenson");
        // return click(".submit");
    // }).then(function() {
        // equal(find("table tr").length, 3, "the table of people was not complete");
        // equal(find("table tr:eq(2) td:eq(0)").text(), "dustin thostenson", "dustin was not added to the html table");
    // });
//});

// test('delete will remove the person for a given row', function() {
//     expect(5);
//     visit("/").then(function() {
//         equal(find("table tr").length, 2, "the table of people was not complete");
//         equal(find("table tr:eq(0) td:eq(0)").text(), "matt morrison", "the first row was incorrect");
//         equal(find("table tr:eq(1) td:eq(0)").text(), "toran billups", "the second row was incorrect");
//         return click("table .delete:first");
//     }).then(function() {
//         equal(find("table tr").length, 1, "the table of people was not complete");
//         equal(find("table tr:eq(0) td:eq(0)").text(), "toran billups", "the wrong person was deleted");
//     });
// });
