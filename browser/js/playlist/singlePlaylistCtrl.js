'use strict';

juke.controller('singlePlaylistCtrl', function ($log, $scope, thePlaylist, allSongs, PlaylistFactory) {

    $scope.playlist = thePlaylist;
    $scope.songs = allSongs;
    // console.log($scope.playlist)
 // PlaylistFactory.fetchById($stateParams.playlistName)
 // .then(function(singlePlaylist) {

 // });
    $scope.addSubmit = function() {
    PlaylistFactory.addId($scope.playlist.id, $scope.newSong)
    .then(function() {
        $scope.newSong = null;
        $scope.addSongForm.$setPristine();
        })
    .catch($log.error);
    }
 
});
