import { useState } from "react";
import { PaginationResponseType } from "../@types/request";
import { Music } from "../@types/music";
import {
  SearchType,
  searchArtistAPI,
  searchMusicAPI,
  searchPlaylistAPI,
} from "../apis/search";
import useToggle from "./useToggle";
import { Artist } from "../@types/artist";
import { Playlist } from "../@types/playlist";

export enum Category {
  HOT = "hot",
  NEW = "new",
}
export const useSearchMusic = () => {
  const { toggle: loading, onOpen: onLoading, onClose: onLoaded } = useToggle();
  const [data, setData] = useState<PaginationResponseType<Music>>({
    current_page: 1,
    items: [],
    total_pages: 0,
    total_items: 0,
    per_page: 0,
  });

  const search = async (
    name: string,
    perPage = 10,
    category = Category.HOT
  ) => {
    onLoading();
    const data = await searchMusicAPI({
      name,
      page: 1,
      type: SearchType.MUSIC,
      per_page: perPage,
      category,
    });
    setData(data.data.data);
    onLoaded();
  };
  const nextPage = async () => {
    onLoading();
    const res = await searchMusicAPI({
      name: "",
      page: data.current_page + 1,
      type: SearchType.MUSIC,
      category: Category.HOT,
    });
    setData((state) => ({
      ...state,
      current_page: res.data.data.current_page,
      items: [...state?.items, ...res.data.data.items],
    }));
    onLoaded();
  };
  return {
    data,
    search,
    nextPage,
    loading,
    currentPage: data?.current_page,
    totalPage: data?.total_pages,
    totalItems: data?.total_items,
    perPage: data?.per_page,
  };
};
export const useSearchArtist = () => {
  const { toggle: loading, onOpen: onLoading, onClose: onLoaded } = useToggle();
  const [data, setData] = useState<PaginationResponseType<Artist>>({
    current_page: 1,
    items: [],
    total_pages: 0,
    total_items: 0,
    per_page: 0,
  });

  const search = async (
    name: string,
    perPage = 10,
    category = Category.HOT
  ) => {
    onLoading();
    const data = await searchArtistAPI({
      name,
      page: 1,
      type: SearchType.ARTIST,
      per_page: perPage,
      category,
    });
    setData(data.data.data);
    onLoaded();
  };
  const nextPage = async () => {
    onLoading();
    const res = await searchArtistAPI({
      name: "",
      page: data.current_page + 1,
      type: SearchType.ARTIST,
      category: Category.HOT,
    });
    setData((state) => ({
      ...state,
      current_page: res.data.data.current_page,
      items: [...state?.items, ...res.data.data.items],
    }));
    onLoaded();
  };
  return {
    data,
    search,
    nextPage,
    loading,
    currentPage: data?.current_page,
    totalPage: data?.total_pages,
    totalItems: data?.total_items,
    perPage: data?.per_page,
  };
};
export const useSearchPlaylist = () => {
  const { toggle: loading, onOpen: onLoading, onClose: onLoaded } = useToggle();
  const [data, setData] = useState<PaginationResponseType<Playlist>>({
    current_page: 1,
    items: [],
    total_pages: 0,
    total_items: 0,
    per_page: 0,
  });

  const search = async (
    name: string,
    perPage = 10,
    category = Category.HOT
  ) => {
    onLoading();
    const data = await searchPlaylistAPI({
      name,
      page: 1,
      type: SearchType.PLAYLIST,
      per_page: perPage,
      category,
    });
    setData(data.data.data);
    onLoaded();
  };
  const nextPage = async () => {
    onLoading();
    const res = await searchPlaylistAPI({
      name: "",
      page: data.current_page + 1,
      type: SearchType.PLAYLIST,
      category: Category.HOT,
    });
    setData((state) => ({
      ...state,
      current_page: res.data.data.current_page,
      items: [...state?.items, ...res.data.data.items],
    }));
    onLoaded();
  };
  return {
    data,
    search,
    nextPage,
    loading,
    currentPage: data?.current_page,
    totalPage: data?.total_pages,
    totalItems: data?.total_items,
    perPage: data?.per_page,
  };
};
