import axios from "axios";

//Client ID 79b94fa7ac944da6be26a6f34b562afc
//Client Secret 322530a6729c429c8ff7eb9148b702b0

https://accounts.spotify.com/authorize?client_id%
response_type
//GET https://accounts.spotify.com/authorize
/*
QUERY PARAMETER	VALUE
client_id	Required.
When you register your application, Spotify provides you a Client ID.
response_type	Required.
Set to code.
redirect_uri*/

//https://api-university.com/

//https%3A%2F%2Fapi-university.com%2F

//curl -H "Authorization: Basic ZjM4Zj...Y0MzE=" -d grant_type=refresh_token -d refresh_token=NgAagA...NUm_SHo https://accounts.spotify.com/api/token

window.onSpotifyWebPlaybackSDKReady = () => {
    const userAccessToken = "[access token]";
    const webPlayback = new Spotify.Player({
      name: "Spotify Web Playback SDK",
      getOAuthToken: callback => { callback(token)}
    });
    webPlayback.connect();
  };

const BASEURL = "https://accounts.spotify.com/authorize";
const config = {
    headers: {"Authorization" : userAccessToken}
};


export default {
    getMusic: function() {
        return axios.get(BASEURL, config)
    }
}