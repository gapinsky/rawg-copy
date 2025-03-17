import APIClient from "@/services/apiClient";
import { useQuery } from "@tanstack/react-query";

interface ResultsProps {
  id: number;
  slug: string;
  name: string;
  background_image: string;
}

interface SearchGamesProps {
  results: ResultsProps[];
}

const apiClient = new APIClient<SearchGamesProps>();

const useSearchGames = (input: string) => {
  return useQuery({
    queryKey: ["gamesSuggestions", input],
    queryFn: () => {
      if (input) {
        return apiClient.getSearchedGames(input);
      }
      return { results: [] };
    },
  });
};

export default useSearchGames;
