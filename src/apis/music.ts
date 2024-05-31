import axios, { AxiosResponse } from "axios";
import { PaginationResponseType } from "../@types/request";
import { Music } from "../@types/music";

export const getMusicByIdAPI = async (
  id: number | string
): Promise<AxiosResponse<{ data: PaginationResponseType<Music> }>> => {
  return axios.get(`/api/v1/music/${id}`);
};
export const likeMusicAPI = async (
  id: number | string
): Promise<AxiosResponse<{ data: Music }>> => {
  return axios.post(`/api/v1/music/${id}/like`);
};
export const dislikeMusicAPI = async (
  id: number | string
): Promise<AxiosResponse<{ data: Music }>> => {
  return axios.delete(`/api/v1/music/${id}/like`);
};

export const getLikedMusicAPI = async (): Promise<
  AxiosResponse<{ data: PaginationResponseType<Music> }>
> => {
  return axios.get(`/api/v1/users/current/music/liked`);
}
