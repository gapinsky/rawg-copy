import { Link } from "react-router-dom";

interface Props {
  name: string;
  slug: string;
  background_image: string;
}

const SimilarGameCard = ({ name, slug, background_image }: Props) => {
  return (
    <div className="border-blue border-2 rounded-md shadow-md overflow-hidden w-[45%] md:w-[30%] xl:w-[15%]">
      <img
        src={background_image}
        alt={`${name} image`}
        className="object-cover aspect-video"
      />
      <div className="p-2">
        <Link
          to={`/game/${slug}`}
          className=" font-semibold hover:cursor-pointer"
        >
          {name}
        </Link>
      </div>
    </div>
  );
};

export default SimilarGameCard;
