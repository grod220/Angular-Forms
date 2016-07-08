'use strict';

juke.factory('PlaylistFactory', function ($http) {

  var factory = {};

  var cachedPlaylists = [];

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
      return response.data;
    });
  };

  return factory;

});
