import axios, { AxiosResponse } from "axios";
import {
  PaginationParamsType,
  PaginationResponseType,
} from "../@types/request";
import { Music } from "../@types/music";
import { Artist } from "../@types/artist";

export enum SearchType {
  MUSIC = "music",
  ARTIST = "artist",
  USER = "user",
}
export const searchMusicAPI = (
  params: PaginationParamsType & { name?: string; type?: SearchType }
): Promise<AxiosResponse<{ data: PaginationResponseType<Music> }>> => {
  return axios.get("/api/v1/search", { params });
};
export const searchArtistAPI = (
  params: PaginationParamsType & { name?: string; type?: SearchType }
): Promise<AxiosResponse<{ data: PaginationResponseType<Artist> }>> => {
  return axios.get("/api/v1/search", { params });
};
export const searchPlaylistAPI = (
  params: PaginationParamsType & { name?: string; type?: SearchType }
): Promise<AxiosResponse<{ data: PaginationResponseType<Music> }>> => {
  return axios.get("/api/v1/search", { params });
};
