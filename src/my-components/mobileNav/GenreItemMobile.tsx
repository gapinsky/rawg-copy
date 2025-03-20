import navContext from "@/my-components/mobileNav/NavContext";
import { useContext } from "react";
import { NavLink } from "react-router-dom";

interface Props {
  name: string;
  image: string;
  slug: string;
}

const GenreItemMobile = ({ name, image, slug }: Props) => {
  const { toggleMenu } = useContext(navContext);

  const handleClick = () => {
    toggleMenu();
    scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <NavLink
      onClick={handleClick}
      state={{ genreName: name }}
      to={`genre/${slug}`}
      className={({ isActive }) =>
        `flex items-center justify-start  whitespace-break-spaces ${
          isActive ? "font-semibold " : ""
        }`
      }
    >
      <img
        src={image}
        alt={`${name} image`}
        className="h-8  aspect-square object-center object-cover mr-2 rounded-md bg-neutral-300"
      />{" "}
      <span className="text-lg ">{name}</span>
    </NavLink>
  );
};

export default GenreItemMobile;
