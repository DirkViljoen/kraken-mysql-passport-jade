var myModule = angular.module('app', []);

//Angular app
myModule.controller('LoginController', function($scope, $http, $window) {
    $scope.loading = true;
    $scope.error = '';

    $scope.login = {};

    // Initiating

    $scope.initLogin = function(csrf) {
        $scope.login._csrf = csrf;
    }

    // CRUD

    $scope.postLogin = function() {
        $http.post('/login', $scope.login)
            .then(function(res) {
                console.log(res.data)
                if (res.data.redirect){
                    $window.location.href = res.data.redirect;
                }
            });
    };



});

myModule.controller('TodolistController', function($scope, $http, $window) {
    $scope.loading = true;
    $scope.error = '';

    $scope.user = {};
    $scope.todolist = [];

    // Initiating

    $scope.initTodoList = function(uid) {
        $scope.user.uid = uid;
    };

    // functions

    $scope.addItem = function(){
        var item = {
            nextAction: 'Complete',
            item: '',
            user: $scope.user.uid
        };

        $scope.todolist.push(item);
    };

    $scope.completeRemoveItem = function(index){
        if ($scope.todolist[index].nextAction == 'Complete') {
            $scope.todolist[index].nextAction = 'Delete';
            $scope.todolist[index].user = $scope.user.uid;
        }
        else
        {
            $scope.todolist.splice(index, 1);
        }
    };
});

myModule.controller('MembersController', function($scope, $http, $window) {
    $scope.loading = true;
    $scope.error = '';

    $scope.user = {};
    $scope.members = [];

    // Initiating

    $scope.initMembers = function(uid) {
        $scope.user.uid = uid;
    };

    // functions

    $scope.addmember = function(){
        var item = {
            username: '',
            password: '',
            admin: false,
            dirty: {username: false, password: false, role: false}
        };

        $scope.members.push(item);
    };

    $scope.removemember = function(index){
        $scope.members.splice(index, 1);
    };

    $scope.dirtyUsername = function(index){
        $scope.members[index].dirty.username = true
    };

    $scope.dirtyPassword = function(index){
        $scope.members[index].dirty.password = true
    };

    $scope.dirtyRole = function(index){
        $scope.members[index].dirty.role = true
    };
});
