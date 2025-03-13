import { GamesProps } from "@/my-components/games/useGames";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
});

class APIClient<T> {
  private static API_KEY = import.meta.env.VITE_API_KEY;

  getGenres = () => {
    return axiosInstance
      .get<{ results: T }>(`/genres?key=${APIClient.API_KEY}`)
      .then((res) => res.data.results);
  };

  getGames = <T extends GamesProps>({
    pageParam,
    genre,
  }: getGamesAtributes): Promise<getGamesProps> => {
    return axiosInstance
      .get<{ results: T[] }>("/games", {
        params: {
          page: pageParam,
          page_size: 9,
          key: APIClient.API_KEY,
          ...(genre !== "" && { genres: genre }),
        },
      })
      .then((res) => {
        return {
          data: res.data.results,
          currentPage: pageParam,
          nextPage: res.data.results.length === 9 ? pageParam + 1 : null,
        };
      });
  };

  getGame = (gameSlug: string) => {
    return axiosInstance
      .get(`/games/${gameSlug}`, {
        params: {
          key: APIClient.API_KEY,
        },
      })
      .then((res) => res.data);
  };
}
export default APIClient;

interface getGamesAtributes {
  pageParam: number;
  genre: string;
}

interface getGamesProps {
  data: GamesProps[];
  currentPage: number;
  nextPage: number | null;
}
