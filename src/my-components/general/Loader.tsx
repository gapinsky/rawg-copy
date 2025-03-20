import { VscLoading } from "react-icons/vsc";
const Loader = () => {
  return (
    <div className=" w-full h-10 flex flex-col items-center justify-center">
      <p>Loading...</p>
      <VscLoading className="text-3xl  animate-spin " />
    </div>
  );
};

export default Loader;
