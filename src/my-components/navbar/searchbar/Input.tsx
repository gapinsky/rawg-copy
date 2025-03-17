import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { MdClear } from "react-icons/md";

interface Props {
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
}

const Input = ({ input, setInput }: Props) => {
  const [inputFocus, setInputFocus] = useState(false);
  return (
    <p
      className={`flex items-center  rounded-full border-2 overflow-hidden shadow-md ${
        inputFocus && "border-neutral-400 "
      }`}
    >
      <BsSearch className="text-xl  ml-3 mr-2 opacity-40" />
      <input
        onFocus={() => setInputFocus(true)}
        onBlur={() => {
          setInputFocus(false), setInput("");
        }}
        placeholder="Search game..."
        className="w-full p-2 bg-neutral-50 dark:bg-neutral-900 border-transparent outline-0 "
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      <button
        className=" p-1 px-2 opacity-40 hover:cursor-pointer"
        disabled={input == ""}
        onClick={() => setInput("")}
      >
        {input !== "" && <MdClear className="text-3xl" />}
      </button>
    </p>
  );
};

export default Input;
