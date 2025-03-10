import APIClient from "@/services/apiClient";
import { useQuery } from "@tanstack/react-query";

export interface GenreProps {
  id: number;
  name: string;
  image_background: string;
  slug: string;
}
const apiClient = new APIClient<GenreProps[]>();

const useGenres = () => {
  return useQuery<GenreProps[], Error>({
    queryKey: ["genres"],
    queryFn: apiClient.getGenres,
    staleTime: 5 * 60 * 1000,
  });
};

export default useGenres;
