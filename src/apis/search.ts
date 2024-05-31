import axios, { AxiosResponse } from "axios";
import {
  PaginationParamsType,
  PaginationResponseType,
} from "../@types/request";
import { Music } from "../@types/music";
import { Artist } from "../@types/artist";
import { Playlist } from "../@types/playlist";
import { Category } from "../hooks/useSearch";

export enum SearchType {
  MUSIC = "music",
  ARTIST = "artist",
  USER = "user",
  PLAYLIST = "playlist",
}
export const searchMusicAPI = (
  params: PaginationParamsType & {
    name?: string;
    type?: SearchType;
    category: Category;
  }
): Promise<AxiosResponse<{ data: PaginationResponseType<Music> }>> => {
  return axios.get("/api/v1/search", { params });
};
export const searchArtistAPI = (
  params: PaginationParamsType & {
    name?: string;
    type?: SearchType;
    category: Category;
  }
): Promise<AxiosResponse<{ data: PaginationResponseType<Artist> }>> => {
  return axios.get("/api/v1/search", { params });
};
export const searchPlaylistAPI = (
  params: PaginationParamsType & {
    name?: string;
    type?: SearchType;
    category: Category;
  }
): Promise<AxiosResponse<{ data: PaginationResponseType<Playlist> }>> => {
  return axios.get("/api/v1/search", { params });
};
