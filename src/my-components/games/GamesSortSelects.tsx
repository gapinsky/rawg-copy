import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "../../components/ui/select";
const GamesSortSelects = () => {
  return (
    <div className="ml-4">
   
      <Select>
        <SelectTrigger className="w-[200px]">
          <span className="font-bold">Platform:</span>
          <SelectValue placeholder="Select" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All</SelectItem>
          <SelectItem value="pc">PC</SelectItem>
          <SelectItem value="playstation">Playstation</SelectItem>
          <SelectItem value="xbox">Xbox</SelectItem>
          <SelectItem value="nintendo">Nintendo</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default GamesSortSelects;
