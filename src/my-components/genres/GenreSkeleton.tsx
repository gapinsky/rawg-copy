import dummyData from "../general/skeletonData";

const GenreSkeleton = () => {
  return (
    <ul className="space-y-2">
      <li className="text-2xl font-bold">Genres</li>
      {dummyData.map((item) => (
        <li
          key={item}
          className="flex items-center justify-start  whitespace-break-spaces  "
        >
          <div className="h-8 aspect-square object-center mr-2 rounded-md bg-neutral-300" />{" "}
          <span className="text-lg">Loading...</span>
        </li>
      ))}
    </ul>
  );
};

export default GenreSkeleton;
