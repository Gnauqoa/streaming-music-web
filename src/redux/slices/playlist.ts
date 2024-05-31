import { createSlice } from "@reduxjs/toolkit";
import { dispatch } from "../store";
import { PaginationResponseType, ReducerType } from "../../@types/request";
import { Playlist } from "../../@types/playlist";
import { getCurrentUserPlaylistAPI } from "../../apis/playlist";


// ----------------------------------------------------------------------

const initialState: { data: PaginationResponseType<Playlist> } & ReducerType = {
  isLoading: false,
  error: null,
  data: {
    items: [],
    total_items: 0,
    total_pages: 0,
    current_page: 0,
    per_page: 0,
  },
};

const slice = createSlice({
  name: "likedPlaylist",
  initialState,
  reducers: {
    // START LOADING
    startLoading(state) {
      state.isLoading = true;
    },

    // HAS ERROR
    hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    // GET User
    getCurrentUserPlaylistSuccess(state, action) {
      state.isLoading = false;
      state.data = { ...action.payload };
    },

    // SET User
    setLikedPlaylistSuccess(
      state,
      action: { payload: PaginationResponseType<Playlist> }
    ) {
      state.isLoading = false;
      state.data = action.payload;
    },
  },
});

// Reducer
export default slice.reducer;

// ----------------------------------------------------------------------
export function getCurrentUserPlaylist() {
  return async () => {
    dispatch(slice.actions.startLoading());
    try {
      const { data } = await getCurrentUserPlaylistAPI();
      dispatch(slice.actions.getCurrentUserPlaylistSuccess(data.data));
    } catch (err) {
      dispatch(slice.actions.hasError(err));
    }
  };
}