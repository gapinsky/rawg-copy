import { Input } from "@/components/ui/input";
import { useState } from "react";
import useSearchGames from "./useSearchGames";
import useDebounce from "./useDebounce";

const SearchInput = () => {
  const [input, setInput] = useState("");
  const debouncedInput = useDebounce(input, 1000);
  const { data: games, isLoading, error } = useSearchGames(debouncedInput);

  return (
    <div className="relative w-[50%] md:w-[70%] lg:w-[75%]">
      <Input
        placeholder="Search game..."
        className="w-full "
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      <ul className="absolute top-10 w-full border-2 bg-neutral-50 dark:bg-neutral-900">
        {isLoading && <li>Loading...</li>}
        {error && <li>{error.message}</li>}
        {games?.results.slice(0, 8).map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchInput;
