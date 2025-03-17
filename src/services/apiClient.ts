import { GamePkProps } from "@/my-components/games/gamePage/useGameScreenshots";
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
    if (gameSlug.trim() === "") return;
    return axiosInstance
      .get<T>(`/games/${gameSlug}`, {
        params: {
          key: APIClient.API_KEY,
        },
      })
      .then((res) => res.data);
  };

  getGameScreenshots = ({ gamePk }: GamePkProps) => {
    if (!gamePk) return;
    return axiosInstance
      .get<T>(`/games/${gamePk}/screenshots`, {
        params: {
          key: APIClient.API_KEY,
        },
      })
      .then((res) => res.data);
  };

  getSimilarGames = (gamePk: number) => {
    if (!gamePk) return;
    return axiosInstance
      .get<T>(`/games/${gamePk}/game-series`, {
        params: {
          key: APIClient.API_KEY,
        },
      })
      .then((res) => res.data);
  };

  getSearchedGames = (input: string) => {
    return axiosInstance
      .get<T>(`/games`, {
        params: {
          search: input,
          search_precise: true,
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
