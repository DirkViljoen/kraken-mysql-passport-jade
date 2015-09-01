'use strict';

var IndexModel = require('../models/index');


module.exports = function (router) {

    var model = new IndexModel();

    router.get('/', function (req, res) {

        // res.send('<code><pre>' + JSON.stringify(model, null, 2) + '</pre></code>');
        res.render('login/login', {});

    });

    router.post('/login', function (req, res) {

        res.send({redirect:'/todolist'});

    });

};
