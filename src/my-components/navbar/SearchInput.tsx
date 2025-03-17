import { useRef, useState } from "react";
import useSearchGames from "./useSearchGames";
import useDebounce from "./useDebounce";
import { BsSearch } from "react-icons/bs";
import { MdClear } from "react-icons/md";
const SearchInput = () => {
  const [input, setInput] = useState("");
  const [inputFocus, setInputFocus] = useState(false);
  const debouncedInput = useDebounce(input, 1000);
  const { data: games, isLoading, error } = useSearchGames(debouncedInput);

  return (
    <div className="relative w-[50%] md:w-[70%] lg:w-[75%]">
      <p
        className={`flex items-center  rounded-full border-2 overflow-hidden shadow-md ${
          inputFocus && "border-neutral-400 "
        }`}
      >
        <BsSearch className="text-xl  ml-3 mr-2 opacity-40" />
        <input
          onFocus={() => setInputFocus(true)}
          onBlur={() => setInputFocus(false)}
          placeholder="Search game..."
          className="w-full p-2 bg-neutral-50 dark:bg-neutral-900 border-transparent outline-0 "
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <button
          className=" p-1 px-2 opacity-40 hover:cursor-pointer"
          disabled={input == ""}
          onClick={() => setInput("")}
        >
          {input !== "" && <MdClear className="text-3xl" />}
        </button>
      </p>
      <ul className="absolute top-12 w-full rounded-lg  shadow-lg overflow-hidden bg-neutral-50 dark:bg-neutral-900">
        {isLoading && <li>Loading...</li>}
        {error && <li>{error.message}</li>}
        {games?.results.slice(0, 10).map((game) => (
          <li
            key={game.id}
            className="p-2  flex items-center text-lg border-y hover:bg-neutral-200 hover:dark:bg-neutral-700"
          >
            <img
              src={game.background_image}
              alt={`${game.name} thumbnail`}
              className="h-10 aspect-square object-cover rounded-sm mr-3"
            />
            {game.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchInput;
