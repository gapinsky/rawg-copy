import { useState } from "react";

import GamesSortSelects from "./GamesSortSelects";
import GamesDisplayOptions from "./GamesDisplayOptions";
import GamesGrid from "./GamesGrid";
const Games = () => {
  const [gamesDisplay, setGamesDisplay] = useState("grid");

  return (
    <div className="w-full  lg:p-5  ">
      <p className="text-4xl lg:text-5xl font-semibold  mb-4">Best Games</p>
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

export default Games;
