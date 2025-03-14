import APIClient from "@/services/apiClient";
import { useQuery } from "@tanstack/react-query";

export interface ImagesProps {
  count: number;
  results: { id: number; image: string }[];
}

export interface GamePkProps {
    gamePk: number | undefined;
  }

const apiClient = new APIClient<ImagesProps>();

const useGameScreenshots = (gamePk: GamePkProps) => {
  return useQuery({
    queryKey: [gamePk],
    queryFn: () => apiClient.getGameScreenshots(gamePk),
    staleTime: 5 * 60 * 1000,
  });
};

export default useGameScreenshots;
