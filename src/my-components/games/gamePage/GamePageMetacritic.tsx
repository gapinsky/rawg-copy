interface Props {
  game: { metacritic: number } | undefined;
}

const GamePageMetacritic = ({ game }: Props) => {
  return (
    <>
      <p className="text-xl font-semibold opacity-60">Metascore</p>
      <p
        className={`border-2 w-fit px-1 rounded-sm font-semibold
              ${
                game?.metacritic &&
                game?.metacritic < 25 &&
                "text-red-500 border-red-500/50 "
              }
              ${
                game?.metacritic &&
                game?.metacritic < 50 &&
                "text-yellow-500 border-yellow-500/50 "
              }
              ${
                game?.metacritic &&
                game?.metacritic < 75 &&
                "text-blue-500 border-blue-500/50 "
              }
              ${
                game?.metacritic &&
                game?.metacritic <= 100 &&
                "text-green-500 border-green-500/50 "
              }
              
              
              `}
      >
        {game?.metacritic}
      </p>
    </>
  );
};

export default GamePageMetacritic;
