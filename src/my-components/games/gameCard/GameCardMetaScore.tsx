interface Props {
  metacritic: number;
}

const GameCardMetaScore = ({ metacritic }: Props) => {
  return (
    <p
      className={`font-bold  ${metacritic < 25 && "text-red-600"} ${
        metacritic < 50 && "text-orange-600"
      } ${metacritic < 75 && "text-yellow-600"} ${
        metacritic <= 100 && "text-green-600"
      }`}
    >
      <span className="font-normal text-neutral-900 dark:text-neutral-50 ">
        Rating:{" "}
      </span>
      {metacritic}{" "}
      <span className="text-neutral-900 dark:text-neutral-50">/100</span>
    </p>
  );
};

export default GameCardMetaScore;
