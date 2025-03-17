import { GameDetailsStoresProps } from "./useGame";

interface Props {
  stores: GameDetailsStoresProps[] | undefined;
}

export const GamePageWhereToBuy = ({ stores }: Props) => {
  return (
    <>
      <p className="mb-2 font-semibold opacity-60">Where to buy</p>
      <div className="space-x-6 grid grid-cols-2 gap-2 ">
        {stores?.map((store) => (
          <a
            key={store.id}
            href={`https://${store.store.domain}`}
            target="_blank"
            className=" py-2 bg-gradient-to-tr from-neutral-700 to-neutral-500 text-neutral-200 font-semibold text-center w-full rounded-sm hover:from-neutral-500"
          >
            {store.store.name}
          </a>
        ))}
        {stores?.length === 0 && <p>Not added</p>}
      </div>
    </>
  );
};
