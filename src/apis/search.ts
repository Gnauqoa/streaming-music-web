import axios, { AxiosResponse } from "axios";
import {
  PaginationParamsType,
  PaginationResponseType,
} from "../@types/request";
import { Music } from "../@types/music";

export enum SearchType {
  MUSIC = "music",
  ARTIST = "artist",
  USER = "user",
}
export const searchAPI = (
  params: PaginationParamsType & { name?: string; type?: SearchType }
): Promise<AxiosResponse<{ data: PaginationResponseType<Music> }>> => {
  return axios.get("/api/v1/search", { params });
};
