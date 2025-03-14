import useGameScreenshots, { GamePkProps } from "./useGameScreenshots";

const GamePageImages = (gamePk: GamePkProps) => {
  if (!gamePk) return;
  const { data: images, isLoading, error } = useGameScreenshots(gamePk);

  if (!isLoading) console.log(images);
  return <div>{images?.results.map(item => <p>{item.id}</p>)}</div>;
};

export default GamePageImages;
