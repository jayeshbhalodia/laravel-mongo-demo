'use strict';
angular.module('mean.test').controller('TestController', ['$scope', '$rootScope', '$routeParams', '$location', '$http', '$modal', 'alertService', 'Global',
    function($scope, $rootScope, $routeParams, $location, $http, $modal, alertService, Global) {

        // ----
        // Network

        $scope.networks = [];
        $scope.addNewMember = function() {
            $scope.networks.push({
                Nid: '',
                Name: '',
                Ip: '',
                Status: ''
            });
        }

        // defualt one 
        $scope.addNewMember();

        // ----
        // Host

        $scope.networkHosts = [];
        $scope.addNewMemberHost = function() {
            $scope.networkHosts.push({
                Hostname: '',
                hostblock: ''
            });
        }

        // defualt one 
        $scope.addNewMemberHost();

        // ----
        // Add Data in Network

        $scope.add = function() {
            if ($scope.testForm.$error.required) {
                $scope.isSubmitted = true;
            };
            var formdata = {
                userid: $scope.testForm.Uid.$modelValue,
                networkArr: $scope.networks,
                networkHostArr: $scope.networkHosts
            }
            console.log(formdata);
            $http.post('api/network', formdata).success(function(network) {
                $location.path('/');
            });
        }

        // ----
        // List Data in Network

        $scope.getList = function() {
            $http.get('api/networks').success(function(networkData) {
                $scope.networkData = networkData;
            });
        }

        // ----
        // Delete Data in Network

        $scope.delete = function(userId) {
            $scope.deleteId = userId;
            var modalInstance = $modal.open({
                templateUrl: 'myModalContent.html',
                controller: ModalInstanceCtrl
            });
            var sendDeleteReq = function(userId) {
                $http.get("api/network/" + userId + "/delete").success(function(res) {
                    $scope.getList();
                });
            }
            modalInstance.result.then(function(action) {
                if (action == 'delete') {
                    sendDeleteReq($scope.deleteId);
                }
            }, function() {});
        }

        var ModalInstanceCtrl = function($scope, $modalInstance) {
            $scope.ok = function() {
                $modalInstance.close('delete');
            };
            $scope.cancel = function() {
                $modalInstance.close();
            }
        }

        // ----
        // Edit Data in Network

        $scope.getData = function() {
            $http.get('api/network/' + $routeParams.id).success(function(networkRecords) {
                $scope.networkRecord = networkRecords;
                $scope.Uid = networkRecords['uid'];
                $scope.networks = networkRecords['networkArr'];
                $scope.networkHosts = networkRecords['networkHostArr'];
            });
        }

        // --
        // Edit post

        $scope.editData = function() {
            if ($scope.testForm.$error.required) {
                $scope.isSubmitted = true;
            };
            var formdata = {
                userid: $scope.testForm.Uid.$modelValue,
                networkArr: $scope.networks,
                networkHostArr: $scope.networkHosts
            }
            console.log(formdata);
            $http.post('api/network/' + $routeParams.id, formdata).success(function(network) {
                $location.path('/list');
            });
        }
    }
]);