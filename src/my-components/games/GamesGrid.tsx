import useGames from "./useGames";

interface Props {
  gamesDisplay: string;
}

const GamesGrid = ({ gamesDisplay }: Props) => {
  const { data: games, isLoading, error } = useGames(1);
  if (!isLoading) console.log(games);
  return (
    <div>
      {games?.map((game) => (
        <p>{game.name}</p>
      ))}
    </div>
  );
};

export default GamesGrid;
