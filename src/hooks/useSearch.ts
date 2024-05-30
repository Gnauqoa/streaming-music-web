import { useState } from "react";
import { PaginationResponseType } from "../@types/request";
import { Music } from "../@types/music";
import { SearchType, searchArtistAPI, searchMusicAPI } from "../apis/search";
import useToggle from "./useToggle";
import { Artist } from "../@types/artist";

export const useSearchMusic = () => {
  const { toggle: loading, onOpen: onLoading, onClose: onLoaded } = useToggle();
  const [data, setData] = useState<PaginationResponseType<Music>>({
    current_page: 1,
    items: [],
    total_pages: 0,
    total_items: 0,
    per_page: 0,
  });

  const search = async (name: string, perPage = 10) => {
    onLoading();
    const data = await searchMusicAPI({
      name,
      page: 1,
      type: SearchType.MUSIC,
      per_page: perPage,
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

  const search = async (name: string, perPage = 10) => {
    onLoading();
    const data = await searchArtistAPI({
      name,
      page: 1,
      type: SearchType.ARTIST,
      per_page: perPage,
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
