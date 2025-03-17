import { VscLoading } from "react-icons/vsc";
const Loader = () => {
  return (
    <VscLoading className="text-3xl animate-spin absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
  );
};

export default Loader;
