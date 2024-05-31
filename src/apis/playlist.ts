import { AxiosResponse } from "axios";
import axios from "../utils/axios";
import { Playlist } from "../@types/playlist";

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
  return axios.post(`/api/v1/playlists/${id}like`);
};
export const dislikePlaylistAPI = (
  id: string | number
): Promise<AxiosResponse<{ data: Playlist }>> => {
  return axios.delete(`/api/v1/playlists/${id}like`);
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
