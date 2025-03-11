interface Props {
  name: string;
  image: string;
  slug: string;
}

const GenreItem = ({ name, image, slug }: Props) => {
  const slugX = slug;
  return (
    <li className="flex items-center justify-start  whitespace-break-spaces  ">
      <img
        src={image}
        alt={`${name} image`}
        className="h-8  aspect-square object-center object-cover mr-2 rounded-md bg-neutral-300"
      />{" "}
      <span className="text-lg font-semibold">{name}</span>
    </li>
  );
};

export default GenreItem;
