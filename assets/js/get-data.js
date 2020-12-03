var spotifyApi = new SpotifyWebApi();
spotifyApi.setAccessToken('<here_your_access_token>');

spotifyApi.getArtistAlbums('4LLpKhyESsyAXpc4laK94U', function (err, data) {
  if (err) console.error(err);
  else console.log('Artist albums', data);
});
