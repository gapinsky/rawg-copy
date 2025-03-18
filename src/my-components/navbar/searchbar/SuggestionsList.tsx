import { Link } from "react-router-dom";
import useSearchGames from "../useSearchGames";
import { TbLoader2 } from "react-icons/tb";
interface Props {
  debouncedInput: string;
}
const SuggestionsList = ({ debouncedInput }: Props) => {
  const { data: games, isLoading, error } = useSearchGames(debouncedInput);
  return (
    <ul className="absolute top-12 w-full rounded-lg  shadow-lg overflow-hidden bg-neutral-50 dark:bg-neutral-900">
      {isLoading && (
        <li className="flex flex-col items-center justify-center space-y-1 p-2">
          <TbLoader2 className="animate-spin" />
          Loading...
        </li>
      )}
      {error && <li className="text-red-500 text-center">{error.message}😞</li>}
      {games?.results.slice(0, 10).map((game) => (
        <li key={game.id}>
          <Link
            to={`/game/${game.slug}`}
            className="p-2  flex items-center text-lg border-y hover:bg-neutral-200 hover:dark:bg-neutral-700"
          >
            <img
              src={game.background_image}
              alt={`${game.name} thumbnail`}
              className="h-10 aspect-square object-cover rounded-sm mr-3"
            />
            {game.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SuggestionsList;
