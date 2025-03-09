import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getGenres = () => {
    return axiosInstance
      .get<{ results: T }>(this.endpoint)
      .then((res) => res.data.results);
  };
}

export default APIClient;

// interface Genre {
//     id: number;
//     name: string;
//     image_background: string;
//     slug: string;
//   }

//   useQuery<Genre[], Error>({ queryKey: ["games"], queryFn: basicFetch })
