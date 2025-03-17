import SimilarGameCard from "./SimilarGameCard";
import useSimilarGames from "./useSimilarGames";

interface Props {
  gameName: string | undefined;
  gamePk: number | undefined;
}

const GamePageSimilarSuggestions = ({ gameName, gamePk }: Props) => {
  if (!gamePk) return;
  const { data: similarGames, isLoading, error } = useSimilarGames(gamePk);
  if (error) return <p className="text-center">{error.message}</p>;
  if (isLoading) return <p className="text-center text-xl">Loading...</p>;
  return (
    <div className="mt-8 xl:col-span-5 ">
      <p className="mb-4 text-2xl text-center">
        Games like <span className="underline">{gameName}</span>
      </p>
      {similarGames?.results.length === 0 && (
        <p className="text-center text-xl">
          We don't have similar proposals 😞
        </p>
      )}
      <div className="flex flex-wrap justify-center gap-5 ">
        {similarGames?.results.slice(0, 5).map((item) => (
          <SimilarGameCard
            key={item.id}
            name={item.name}
            slug={item.slug}
            background_image={item.background_image}
          />
        ))}
      </div>
    </div>
  );
};

export default GamePageSimilarSuggestions;
