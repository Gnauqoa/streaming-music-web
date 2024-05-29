import { useState } from "react";
import { PaginationResponseType } from "../@types/request";
import { Music } from "../@types/music";
import { SearchType, searchAPI } from "../apis/search";

const useSearch = () => {
  const [data, setData] = useState<PaginationResponseType<Music>>({
    current_page: 1,
    items: [],
    total_pages: 0,
    total_items: 0,
    per_page: 0,
  });

  const search = async (name: string) => {
    const data = await searchAPI({
      name,
      page: 1,
      type: SearchType.MUSIC,
    });
    setData(data.data.data);
  };
  const nextPage = async () => {
    const res = await searchAPI({
      name: "",
      page: data.current_page + 1,
      type: SearchType.MUSIC,
    });
    setData((state) => ({
      ...state,
      current_page: res.data.data.current_page,
      items: [...state?.items, ...res.data.data.items],
    }));
  };
  return {
    data,
    search,
    nextPage,
    currentPage: data?.current_page,
    totalPage: data?.total_pages,
    totalItems: data?.total_items,
    perPage: data?.per_page,
  };
};

export default useSearch;
