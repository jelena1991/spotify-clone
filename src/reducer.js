export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token: null,
  // "BQDU5c0_QnU7UBY65hZ9lMwK8Pi5ZO7dP-rqJT-rF5TfubVCXZxI1F0IWn_nuqqmRAeKE1Geoyx_VHhuJdZvSpHQd_8bNqj_YjPBmm6mGSbj9ij1mKZ8TPhu80ubUWA4jS9QuOg8ZnjNK9-iFVi2p3o4EmMKW_NAOTtW6HzR6zuIj1TftbCF",
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    default:
      return state;
  }
};

export default reducer;
