import { useState } from "react";
import useDebounce from "../useDebounce";

import Input from "./Input";
import SuggestionsList from "./SuggestionsList";
const SearchInput = () => {
  const [input, setInput] = useState("");

  const debouncedInput = useDebounce(input, 500);

  return (
    <div className="relative w-[50%] md:w-[70%] lg:w-[75%]">
      <Input input={input} setInput={setInput} />
      <SuggestionsList debouncedInput={debouncedInput} />
    </div>
  );
};

export default SearchInput;
