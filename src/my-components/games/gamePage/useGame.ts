import APIClient from "@/services/apiClient";
import { useQuery } from "@tanstack/react-query";

export interface GameDetailsProps {
  id: number;
  name: string;
  background_image: string;
  background_image_additional: string;
  description_raw: string;
  released: string;
  metacritic: number;
  publisher: { id: number; name: string; image_background: string }[];
  platforms: GameDetailsPlatformsProps[];
  ratings: GameDetailsRatingsProps[];
  esrb_rating: { id: number; name: string };
}

export interface GameDetailsPlatformsProps {
  platform: { id: number; name: string };
}

export interface GameDetailsRatingsProps {
  id: number;
  title: string;
  count: number;
  percent: number;
}

const apiClient = new APIClient<GameDetailsProps>();

const useGame = (gameSlug: string) => {
  return useQuery({
    queryKey: [gameSlug],
    queryFn: () => apiClient.getGame(gameSlug),
    staleTime: 5 * 60 * 1000,
  });
};

export default useGame;
