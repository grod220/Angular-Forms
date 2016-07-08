'use strict';

juke.factory('PlaylistFactory', function ($http, SongFactory) {

  var factory = {};

  var cachedPlaylists = [];
  var cachedPlaylist = {};

  factory.create = function (data) {
    return $http.post('/api/playlists', data)
    .then(function (response) {
      var playlist = response.data;
      cachedPlaylists.push(playlist);
      return playlist;
    });
  };

  factory.fetchAll = function () {
    return $http.get('/api/playlists')
    .then(function (response) {
      angular.copy(response.data, cachedPlaylists);
      return cachedPlaylists;
    });
  };

  factory.fetchById = function (playlistId) {
    return $http.get('/api/playlists/' + playlistId)
    .then(function (response) {
      angular.copy(response.data, cachedPlaylist)
      return cachedPlaylist;
    });
  };

  factory.addId = function(playlistId, addSong) {
    return $http.post('/api/playlists/' + playlistId + '/songs', addSong)
    .then(function(result) {
      var song = result.data;
      SongFactory.convert(song);
      cachedPlaylist.songs.push(song);
      return song;
    });

  }

  return factory;

});
