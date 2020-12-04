const spotifyApi = new SpotifyWebApi();

async function postData(url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      "Authorization": "Basic NGQ4MzczNzYzZTIwNGVlYTk3ZWExNjRiZWZhNDk1NGY6YTA2ZDU3ZDVkYjQ1NDI1NDg1MWU5MzgyM2E1MzAyNjg="
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: 'grant_type=client_credentials' // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

postData('https://accounts.spotify.com/api/token')
  .then(data => {
    console.log(data.access_token); // JSON data parsed by `data.json()` call
    spotifyApi.setAccessToken(data.access_token);
    spotifyApi.getArtistAlbums('4LLpKhyESsyAXpc4laK94U', function (err, data) {
      if (err) console.error(err);
      else console.log('Artist albums', data.items);
    });
  });

// spotifyApi.setAccessToken('BQCTcOBPtoxE35T04jDJMll5NTr2Z0tfiCg4Z8MuVd9CuTzc3jSDSCFCYAh0XqUSklq-_yt4q_vFaoCS-FY');

// spotifyApi.getArtistAlbums('4LLpKhyESsyAXpc4laK94U', function (err, data) {
//   if (err) console.error(err);
//   else console.log('Artist albums', data);
// });
