import { useState } from "react";

import GamesSortSelects from "./GamesSortSelects";
import GamesDisplayOptions from "./GamesDisplayOptions";
import GamesGrid from "./GamesGrid";
const Games = () => {
  const [gamesDisplay, setGamesDisplay] = useState("grid");
  
  return (
    <div className="w-full h-[90vh] lg:p-5">
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
