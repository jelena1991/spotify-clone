export const authEndpoint = "https://accounts.spotify.com/authorize";

const clientId = "0c3d5ef12fc0421aa549fe7f72264d27";

const redirectUri = "http://localhost:3000/";

const scopes = [
  "user-modify-playback-state",
  "user-top-read",
  "user-read-playback-position",
  "user-read-recently-played",
  "user-read-currently-playing",
];

export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      var parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
      return initial;
    }, {});
};

export const loginUrl = `${authEndpoint}?response_type=token&client_id=${clientId}&scope=${scopes.join(
  "%20"
)}&redirect_uri=${redirectUri}&show_dialog=true`;
