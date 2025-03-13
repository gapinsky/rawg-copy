import { useParams } from "react-router-dom";
import useGame from "./useGame";

const GamePage = () => {
  const params = useParams();
  const gameSlug = params.game ? params.game : "";
  const { data: game, isLoading, error } = useGame(gameSlug);
  if (isLoading) return <p>Loading</p>;
  console.log(game?.name);
  return (
    <div className="bg-red-500 w-full h-57 ">
      <p>{game?.name}</p>
      <p>{game?.released}</p>
    </div>
  );
};

export default GamePage;
