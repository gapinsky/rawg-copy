import { ModeToggle } from "@/components/mode-toggle";
import { Avatar } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { GrGift } from "react-icons/gr";
import { VscLibrary } from "react-icons/vsc";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="sticky  z-10 inset-0 top-0 h-fit  flex items-center justify-around  py-3 md:py-5 border-b-2 bg-neutral-50 dark:bg-neutral-900">
      <Link className="uppercase  font-extrabold md:text-xl" to="">
        rawg<span className="text-xs font-normal tracking-tighter">copy</span>
      </Link>

      <Input
        placeholder="Search game..."
        className="max-w-[50%] md:max-w-[70%] lg:max-w-[75%] "
      />
      <div className="flex items-center space-x-2 md:space-x-4 lg:space-x-6">
        <div className="hidden text-neutral-500  xl:flex text-3xl items-end space-x-4 dark:text-neutral-200">
          <GrGift className="text-3xl mb-0.5" />
          <VscLibrary />
        </div>
        <Avatar>
          <AvatarImage src="/images/noImage.png" />
          <AvatarFallback>AG</AvatarFallback>
        </Avatar>

        <ModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
