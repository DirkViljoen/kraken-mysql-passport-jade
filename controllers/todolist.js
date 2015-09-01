'use strict';

var TodolistModel = require('../models/todolist');


module.exports = function (router) {

    var model = new TodolistModel();

    router.get('/', function (req, res) {

        // res.send('<code><pre>' + JSON.stringify(model, null, 2) + '</pre></code>');
        res.render('todolist/todolist', {});


    });

};
