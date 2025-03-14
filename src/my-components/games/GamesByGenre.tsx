import { useState } from "react";
import GamesGrid from "./GamesGrid";
import GamesSortSelects from "./GamesSortSelects";
import GamesDisplayOptions from "./GamesDisplayOptions";
import { useLocation } from "react-router-dom";

const GamesByGenre = () => {
  const [gamesDisplay, setGamesDisplay] = useState("grid");
  const link = useLocation();
  return (
    <div className="w-full lg:p-5">
      <p className="text-4xl lg:text-5xl font-semibold  mb-4">
        {link.state?.genreName} Games
      </p>
      <div className="flex items-center justify-start  lg:justify-between">
        <GamesSortSelects />
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
