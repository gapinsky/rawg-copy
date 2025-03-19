import APIClient from "@/services/apiClient";
import { useInfiniteQuery } from "@tanstack/react-query";

export interface GamesProps {
  id: number;
  slug: string;
  name: string;
  released: string;
  background_image: string;
  metacritic: number;
  platforms: Platforms[];
}

export interface Platforms {
  platform: { id: number; name: string };
}

const apiClient = new APIClient<GamesProps[]>();

const useGames = (genre: string) => {
  return useInfiniteQuery({
    queryKey: ["games", genre],
    queryFn: (initialPageParam) =>
      apiClient.getGames({
        pageParam: initialPageParam.pageParam,
        genre: genre,
      }),
    staleTime: 5 * 60 * 1000,
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.nextPage,
  });

};

export default useGames;
