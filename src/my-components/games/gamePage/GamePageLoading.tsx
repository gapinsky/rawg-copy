import { VscLoading } from "react-icons/vsc";
const GamePageLoading = () => {
  return (
    <div className="w-full h-svh flex flex-col items-center justify-center text-2xl">
      <p className="mb-2">Loading</p>
      <VscLoading className="animate-spin" />
    </div>
  );
};

export default GamePageLoading;
