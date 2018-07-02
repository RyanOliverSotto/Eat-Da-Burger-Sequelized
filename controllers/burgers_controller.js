var express = require('express');
var router = express.Router();

var burger = require('../models/burgers.js');

router.get('/', function (request, response) {
    burger.findAll(function (data) {
        var viewObject = {
            burgers: data
        };
        response.render('index', viewObject);
    });
});

router.post('/burgers', function (request, response) {
    burger.create([
        'burger_name'
    ], [
            request.body.burger_name
        ], function (data) {
            response.redirect('/');
        });
});

router.put('/burgers/:id', function (request, response) {
    var condition = 'id = ' + request.params.id;

    burger.update({
        devoured: true
    }, condition, function (data) {
        response.redirect('/');
    });
});

router.delete('/burgers/:id', function (request, response) {
    var condition = 'id = ' + request.params.id;
    burger.destroy(condition, function (result) {
        response.redirect('/');
    });
});

module.exports = router;