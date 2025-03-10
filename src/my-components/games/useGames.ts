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

interface Platforms {
  platform: { id: number; name: string };
}

const apiClient = new APIClient<GamesProps[]>();

// const useGames = (pageNumber: number = 1) => {
//   return useQuery<GamesProps[], Error>({
//     queryKey: ["games", pageNumber],
//     queryFn: () => apiClient.getGames(pageNumber),
//     staleTime: 5 * 60 * 1000,

//   });
const useGames = () => {
  return useInfiniteQuery({
    queryKey: ["games"],
    queryFn: apiClient.getGames,
    staleTime: 5 * 60 * 1000,
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.nextPage,
  });
};

export default useGames;
