'use strict';

juke.factory('PlaylistFactory', function ($http) {

  var factory = {};

  factory.create = function (data) {
    return $http.post('/api/playlists', data)
    .then(function (response) {
      return response.data;
    });
  };

  return factory;

});
