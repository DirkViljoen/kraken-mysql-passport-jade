'use strict';

var MembersModel = require('../models/members');


module.exports = function (router) {

    var model = new MembersModel();

    router.get('/', function (req, res) {

        //res.send('<code><pre>' + JSON.stringify(model, null, 2) + '</pre></code>');
        res.render('members/members', {uid: 1});
    });

};
