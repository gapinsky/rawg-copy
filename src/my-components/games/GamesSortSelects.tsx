import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "../../components/ui/select";
const GamesSortSelects = () => {
  return (
    <div>
      {/* <Select>
        <SelectTrigger className="w-[210px] ">
          <span className="font-bold">Order by:</span>
          <SelectValue placeholder="Select" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="name">Name</SelectItem>
          <SelectItem value="popularity">Popularity</SelectItem>
          <SelectItem value="rating">Average rating</SelectItem>
          <SelectItem value="release">Release date</SelectItem>
        </SelectContent>
      </Select> */}
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
