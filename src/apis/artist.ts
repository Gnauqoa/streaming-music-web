import { AxiosResponse } from "axios";
import { Artist } from "../@types/artist";
import axios from "../utils/axios";
import { PaginationResponseType } from "../@types/request";
import { Music } from "../@types/music";

export const getArtistByIdAPI = async (
  id: string | number
): Promise<AxiosResponse<{ data: Artist }>> => {
  return axios.get(`/api/v1/artists/${id}`);
};

export const getArtistMusicsAPI = async (
  id: string | number
): Promise<AxiosResponse<{ data: PaginationResponseType<Music> }>> => {
  return axios.get(`/api/v1/artists/${id}/musics`);
};
