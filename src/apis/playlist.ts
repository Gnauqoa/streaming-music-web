import { AxiosResponse } from "axios";
import axios from "../utils/axios";
import { Playlist } from "../@types/playlist";
import { PaginationResponseType } from "../@types/request";

export const createPlaylistAPI = (): Promise<
  AxiosResponse<{ data: Playlist }>
> => {
  return axios.post("/api/v1/playlists", {});
};

export const updatePlaylistAPI = ({
  id,
  payload,
}: {
  id: number | string;
  payload: { name: string; description: string };
}): Promise<AxiosResponse<{ data: Playlist }>> => {
  return axios.put(`/api/v1/playlists/${id}`, payload);
};
export const likePlaylistAPI = (
  id: string | number
): Promise<AxiosResponse<{ data: Playlist }>> => {
  return axios.post(`/api/v1/playlists/${id}/like`);
};
export const dislikePlaylistAPI = (
  id: string | number
): Promise<AxiosResponse<{ data: Playlist }>> => {
  return axios.delete(`/api/v1/playlists/${id}/like`);
};
export const deletePlaylistAPI = (
  id: string | number
): Promise<AxiosResponse<{ data: Playlist }>> => {
  return axios.delete(`/api/v1/playlists/${id}`);
};
export const getPlaylistAPI = (
  id: string | number
): Promise<AxiosResponse<{ data: Playlist }>> => {
  return axios.get(`/api/v1/playlists/${id}`);
};
export const getCurrentUserPlaylistAPI = (): Promise<
  AxiosResponse<{ data: PaginationResponseType<Playlist> }>
> => {
  return axios.get("/api/v1/users/current/playlists");
};
export const addMusicToPlaylistAPI = ({
  id,
  music_id,
}: {
  id: number;
  music_id: number;
}): Promise<
  AxiosResponse<{
    data: Playlist;
  }>
> => {
  return axios.post(`/api/v1/playlists/${id}/musics`, { music_id: music_id });
};
export const deleteMusicToPlaylistAPI = ({
  id,
  music_id,
}: {
  id: number;
  music_id: number;
}): Promise<
  AxiosResponse<{
    data: Playlist;
  }>
> => {
  return axios.delete(`/api/v1/playlists/${id}/musics`, {
    params: { music_id },
  });
};
