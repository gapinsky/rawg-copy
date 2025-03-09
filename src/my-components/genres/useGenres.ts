import APIClient from "@/services/apiClient";
import { useQuery } from "@tanstack/react-query";

export interface GenreProps {
  id: number;
  name: string;
  image_background: string;
  slug: string;
}
const apiKey = import.meta.env.VITE_API_KEY;
const apiClient = new APIClient<GenreProps[]>(`/genres?key=${apiKey}`);

const useGenres = () => {
  return useQuery<GenreProps[], Error>({
    queryKey: ["genres"],
    queryFn: apiClient.getGenres,
    staleTime: 5 * 60 * 1000,
  });
};

export default useGenres;
