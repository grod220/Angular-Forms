'use strict';

juke.controller('SidebarCtrl', function ($scope, PlaylistFactory, $log) {

  // nothing to see here for now… state transitions happening with ui-sref!

  PlaylistFactory.fetchAll()
  .then(function (playlist) {
    $scope.playlists = playlist;
    console.log()
  })
  .catch($log.error);

});
