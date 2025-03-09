interface Props {
  name: string;
  image: string;
  slug: string;
}

const GenreItem = ({ name, image, slug }: Props) => {
  const slugX = slug;
  return (
    <li className="flex items-center">
      <img
        src={image}
        alt={`${name} image`}
        className="h-6 aspect-square object-center"
      />{" "}
      {name}
    </li>
  );
};

export default GenreItem;
