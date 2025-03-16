interface Props {
  gameName: string | undefined;
}

const GamePageSimilarSuggestions = ({ gameName }: Props) => {
  return (
    <div className="border-2 mt-8 border-red-500 flex flex-col items-center justify-center  xl:col-span-5 xl:w-full">
      <p className="mb-4 text-2xl">
        Games like <span className="underline">{gameName}</span>
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 ">
        <div className="bg-red-500">
          <img src="" alt="" />
          <p>Title</p>
        </div>
        <div className="bg-red-500">
          <img src="" alt="" />
          <p>Title</p>
        </div>
        <div className="bg-red-500">
          <img src="" alt="" />
          <p>Title</p>
        </div>
      </div>
    </div>
  );
};

export default GamePageSimilarSuggestions;
