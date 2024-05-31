import { createSlice } from "@reduxjs/toolkit";
import { dispatch } from "../store";
import { PaginationResponseType, ReducerType } from "../../@types/request";
import { UserType } from "../../@types/user";
import { getCurrentUser } from "../../apis/auth";
import { Music } from "../../@types/music";
import { getLikedMusicAPI } from "../../apis/music";

// ----------------------------------------------------------------------

const initialState: { data: PaginationResponseType<Music> } & ReducerType = {
  isLoading: true,
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
  name: "likedMusic",
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
    getLikedMusicSuccess(state, action) {
      state.isLoading = false;
      state.data = { ...action.payload };
    },

    // SET User
    setLikedMusicSuccess(
      state,
      action: { payload: PaginationResponseType<Music> }
    ) {
      state.isLoading = false;
      state.data = action.payload;
    },
  },
});

// Reducer
export default slice.reducer;

// ----------------------------------------------------------------------
export function getLikedMusic() {
  return async () => {
    dispatch(slice.actions.startLoading());
    try {
      const { data } = await getLikedMusicAPI();
      dispatch(slice.actions.getLikedMusicSuccess(data.data));
    } catch (err) {
      dispatch(slice.actions.hasError(err));
    }
  };
}