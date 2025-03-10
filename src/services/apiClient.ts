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

  // getGames = () => {
  //   return axiosInstance
  //   .get(`/games?key=${APIClient.API_KEY}&page_size=9`)
  //   .then((res) => res.data);
  // };
  getGames = <T extends GamesProps>({
    pageParam,
  }: {
    pageParam: number;
  }): Promise<getGamesProps> => {
    return axiosInstance
      .get<{ results: T[] }>("/games", {
        params: { page: pageParam, page_size: 9, key: APIClient.API_KEY },
      })
      .then((res) => {
        return {
          data: res.data.results,
          currentPage: pageParam,
          nextPage: res.data.results.length === 9 ? pageParam + 1 : null,
        };
      });
  };
}
export default APIClient;

interface getGamesProps {
  data: GamesProps[];
  currentPage: number;
  nextPage: number | null;
}
