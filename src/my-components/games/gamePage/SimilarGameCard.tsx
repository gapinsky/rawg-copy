import { Link } from "react-router-dom";

interface Props {
  name: string;
  slug: string;
  background_image: string;
}

const SimilarGameCard = ({ name, slug, background_image }: Props) => {
  return (
    <Link
      to={`/game/${slug}`}
      className="border-blue border-2 rounded-md shadow-md overflow-hidden w-[45%] md:w-[30%] xl:w-[15%] hover:scale-105 transition-transform ease-in-out duration-75"
    >
      <img
        src={background_image}
        alt={`${name} image`}
        className="object-cover aspect-video"
      />
      <div className="p-2">
        <p className=" font-semibold hover:cursor-pointer hover:opacity-70">
          {name}
        </p>
      </div>
    </Link>
  );
};

export default SimilarGameCard;
