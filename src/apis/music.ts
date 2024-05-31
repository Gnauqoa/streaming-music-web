import axios, { AxiosResponse } from "axios";
import { PaginationResponseType } from "../@types/request";
import { Music } from "../@types/music";

export const getMusicByIdAPI = async (
  id: number | string
): Promise<AxiosResponse<{ data: Music }>> => {
  return axios.get(`/api/v1/musics/${id}`);
};
export const likeMusicAPI = async (
  id: number | string
): Promise<AxiosResponse<{ data: Music }>> => {
  return axios.post(`/api/v1/musics/${id}/like`);
};
export const dislikeMusicAPI = async (
  id: number | string
): Promise<AxiosResponse<{ data: Music }>> => {
  return axios.delete(`/api/v1/musics/${id}/like`);
};

export const getLikedMusicAPI = async (): Promise<
  AxiosResponse<{ data: PaginationResponseType<Music> }>
> => {
  return axios.get(`/api/v1/users/current/musics/liked`);
};
