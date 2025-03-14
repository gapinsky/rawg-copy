interface Props {
  platforms: { platform: { id: number; name: string } }[] | undefined;
}

const GamePagePlatforms = ({ platforms }: Props) => {
  return (
    <>
      <p className="font-semibold opacity-60 text-xl">Platforms</p>
      {platforms?.map((platform, index) => (
        <span key={platform.platform.id}>
          {platform.platform.name}
          {index !== platforms.length - 1 ? ", " : ""}
        </span>
      ))}
      .
    </>
  );
};

export default GamePagePlatforms;
