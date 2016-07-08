'use strict';

juke.controller('newPlaylistCtrl', function ($scope) {

  $scope.newSubmit = function () {
    console.log('The new Playlist:', $scope.newName);
  };

});
