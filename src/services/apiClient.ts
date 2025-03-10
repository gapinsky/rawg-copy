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
  getGames = (page: number) => {
    return axiosInstance
      .get<{ results: T }>("/games", {
        params: { key: APIClient.API_KEY, page: page, page_size: 9 },
      })
      .then((res) => res.data.results);
  };
}
export default APIClient;

