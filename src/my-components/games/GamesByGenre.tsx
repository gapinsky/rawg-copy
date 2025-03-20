import { useState } from "react";
import GamesGrid from "./GamesGrid";
// import GamesSortSelects from "./GamesSortSelects";
import GamesDisplayOptions from "./GamesDisplayOptions";
import { useLocation } from "react-router-dom";

const GamesByGenre = () => {
  const [gamesDisplay, setGamesDisplay] = useState("grid");
  const link = useLocation();
  return (
    <div className="w-full  lg:px-5">
      <p className="text-3xl md:text-4xl lg:text-5xl font-semibold  my-4 ml-5 ">
        {link.state?.genreName}
      </p>
      <div className=" flex items-center justify-end">
        {/* <GamesSortSelects /> */}
        <GamesDisplayOptions
          gamesDisplay={gamesDisplay}
          setGamesDisplay={setGamesDisplay}
        />
      </div>
      <GamesGrid gamesDisplay={gamesDisplay} />
    </div>
  );
};

export default GamesByGenre;
