import { ModeToggle } from "@/components/mode-toggle";
import { Avatar } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
const Navbar = () => {
  return (
    <nav className="sticky inset-0 top-0 h-fit  flex items-center justify-around  py-3 md:py-5 border-b-2 bg-white dark:bg-black">
      <div className="uppercase tracking-widest font-bold ">rawg</div>
      <Input
        placeholder="Search game..."
        className="max-w-[50%] md:max-w-[70%] lg:max-w-[75%]"
      />
      <div className="flex space-x-2 md:space-x-4 lg:space-x-6">
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
