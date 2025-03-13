import APIClient from "@/services/apiClient";
import { useQuery } from "@tanstack/react-query";

const apiClient = new APIClient();

const useGame = (gameSlug: string) => {
  return useQuery({
    queryKey: ["game"],
    queryFn: apiClient.getGame(gameSlug),
    staleTime: 5 * 60 * 1000,
  });
};

export default useGame;
