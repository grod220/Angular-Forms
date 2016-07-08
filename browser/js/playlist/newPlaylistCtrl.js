'use strict';

juke.controller('newPlaylistCtrl', function ($log, $scope, PlaylistFactory, $state) {

  $scope.newSubmit = function () {
    // console.log('The new Playlist:', $scope.newName);
    // console.log("The form is", $scope.newListForm)
    PlaylistFactory.create($scope.newName)
    .then(function(result) {
        // console.log("The HTTP response was", result);
        $scope.newName = "";
        $scope.newListForm.$setPristine();
        $state.go('singlePlaylist',{playlistId: result.id});
        })
    .catch($log.error);
    };

});
