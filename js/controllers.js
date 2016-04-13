angular.module('starter.controllers', [])

        .controller('AppCtrl', function ($scope, $ionicModal, $timeout) {

            // With the new view caching in Ionic, Controllers are only called
            // when they are recreated or on app start, instead of every page change.
            // To listen for when this page is active (for example, to refresh data),
            // listen for the $ionicView.enter event:
            //$scope.$on('$ionicView.enter', function(e) {
            //});

            // Form data for the login modal
            $scope.loginData = {};
            // Create the login modal that we will use later
            $ionicModal.fromTemplateUrl('templates/login.html', {
                scope: $scope
            }).then(function (modal) {
                $scope.modal = modal;
            });
            // Triggered in the login modal to close it
            $scope.closeLogin = function () {
                $scope.modal.hide();
            };
            // Open the login modal
            $scope.login = function () {
                $scope.modal.show();
            };
            // Perform the login action when the user submits the login form
            $scope.doLogin = function () {
                console.log('Doing login', $scope.loginData);
                // Simulate a login delay. Remove this and replace with your login
                // code if using a login system
                $timeout(function () {
                    $scope.closeLogin();
                }, 1000);
            };
        })
        .controller('BrowseCtrl', function ($scope) {
            var apiKey = '45121182';
            var sessionId = '2_MX40NTEyMTE4Mn5-MTQ1OTgzNjA1NzM2OH5VMnFIbWI1SXFFdk13R0FPWm5zaVpyQ3d-UH4';
            var token = 'T1==cGFydG5lcl9pZD00NTEyMTE4MiZzaWc9Y2ExZjEyYmM4NTIyZGMwNzg0YjYxMDMwZjY2ZGY4N2Q5NjJhOGJjZjpzZXNzaW9uX2lkPTJfTVg0ME5URXlNVEU0TW41LU1UUTFPVGd6TmpBMU56TTJPSDVWTW5GSWJXSTFTWEZGZGsxM1IwRlBXbTV6YVZweVEzZC1VSDQmY3JlYXRlX3RpbWU9MTQ2MDUyODkwOSZyb2xlPXB1Ymxpc2hlciZub25jZT0xNDYwNTI4OTA5LjA4NzIwNjQ1MTEwOTA=';
            var session = OT.initSession(apiKey, sessionId);
            session.on({
                streamCreated: function (event) {
                    session.subscribe(event.stream, 'subscribersDiv', {width: "100%", height: "100%"});
                }
            });
            session.connect(token, function (error) {
                if (error) {
                    console.log(error.message);
                } else {
                    session.publish('myPublisherDiv', {width: "30%", height: "30%"});
                }
            });
        })

        .controller('SearchCtrl', function ($scope,$cordovaInAppBrowser,$rootScope) {
            var options = {
                location: 'yes',
                clearcache: 'yes',
                toolbar: 'no'
            };
            document.addEventListener(function () {
                $cordovaInAppBrowser.open('https://stage.doctrs.in/opentok/opentok?session=2_MX40NTEyMTE4Mn5-MTQ1OTgzNjA1NzM2OH5VMnFIbWI1SXFFdk13R0FPWm5zaVpyQ3d-UH4', '_blank', options)
                        .then(function (event) {
                            // success
                        })
                        .catch(function (event) {
                            // error
                        });
                $cordovaInAppBrowser.close();
            }, false);
            $rootScope.$on('$cordovaInAppBrowser:loadstart', function (e, event) {

            });
            $rootScope.$on('$cordovaInAppBrowser:loadstop', function (e, event) {
                // insert CSS via code / file
                $cordovaInAppBrowser.insertCSS({
                    code: 'body {background-color:blue;}'
                });
                // insert Javascript via code / file
                $cordovaInAppBrowser.executeScript({
                    file: 'script.js'
                });
            });
            $rootScope.$on('$cordovaInAppBrowser:loaderror', function (e, event) {

            });
            $rootScope.$on('$cordovaInAppBrowser:exit', function (e, event) {

            });
        })

.controller('PlaylistsCtrl', function ($scope) {
    $scope.playlists = [
        {title: 'Reggae', id: 1},
        {title: 'Chill', id: 2},
        {title: 'Dubstep', id: 3},
        {title: 'Indie', id: 4},
        {title: 'Rap', id: 5},
        {title: 'Cowbell', id: 6}
    ];
})

        .controller('PlaylistCtrl', function ($scope, $stateParams) {
        });
