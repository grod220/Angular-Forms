juke.config(function ($stateProvider) {

  $stateProvider.state('newPlaylist', {
    url: '/playlists/new',
    templateUrl: '/js/playlist/templates/playlist-form.html',
    controller: 'newPlaylistCtrl'
  })

  .state('singlePlaylist', {
    url: '/playlists/:playlistId',
    templateUrl: '/js/playlist/templates/singlePlaylist.html',
    controller: 'singlePlaylistCtrl',
    resolve: {
      thePlaylist: function (PlaylistFactory, $stateParams) {
        return PlaylistFactory.fetchById($stateParams.playlistId);
      },
      allSongs: function(SongFactory) {
        return SongFactory.fetchAll();
      }
    }
  });
});
