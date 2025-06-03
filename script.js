// Code goes here

        var app = angular.module('myApp', []);

        app.controller('myControl', function ($scope, $http) {

            $http.get('data.json').success(function (data) {
                $scope.columns = data[0];
                $scope.rows = data;
            }).error(function (data, status) {

            });

            $scope.key = function (obj) {
                if (!obj) return [];
                return Object.keys(obj);
            }

        });
