import APIClient from "@/services/apiClient";
import { useQuery } from "@tanstack/react-query";
interface SimilarGames {
  id: number;
  slug: string;
  name: string;
  background_image: string;
}

interface SimilarProps {
  results: SimilarGames[];
}

const apiClient = new APIClient<SimilarProps>();

const useSimilarGames = (gamePk: number) => {
  return useQuery({
    queryKey: [gamePk],
    queryFn: () => apiClient.getSimilarGames(gamePk),
    staleTime: 5 * 60 * 1000,
  });
};

export default useSimilarGames;
