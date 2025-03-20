import { useState } from "react";

import GamesSortSelects from "./GamesSortSelects";
import GamesDisplayOptions from "./GamesDisplayOptions";
import GamesGrid from "./GamesGrid";
const Games = () => {
  const [gamesDisplay, setGamesDisplay] = useState("grid");

  return (
    <div className="w-full  lg:px-5  ">
      <p className="text-3xl lg:text-5xl font-semibold my-4 ml-4">Best Games</p>
      <div className="flex items-center justify-end">
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

export default Games;
