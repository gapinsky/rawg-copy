import { NavLink } from "react-router-dom";

interface Props {
  name: string;
  image: string;
  slug: string;
}

const GenreItem = ({ name, image, slug }: Props) => {
  return (
    <NavLink
      onClick={() => scrollTo({ top: 0, left: 0, behavior: "smooth" })}
      state={{ genreName: name }}
      to={`/${slug}`}
      className={({ isActive }) =>
        `flex items-center justify-start  whitespace-break-spaces ${
          isActive ? "font-semibold scale-110 ml-5" : ""
        }`
      }
    >
      {/* flex items-center justify-start  whitespace-break-spaces */}
      <img
        src={image}
        alt={`${name} image`}
        className="h-8  aspect-square object-center object-cover mr-2 rounded-md bg-neutral-300"
      />{" "}
      <span className="text-lg ">{name}</span>
    </NavLink>
  );
};

export default GenreItem;
