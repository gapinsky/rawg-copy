interface Props {
  platforms: { platform: { id: number; name: string } }[] | undefined;
}

const GamePagePlatforms = ({ platforms }: Props) => {
  return (
    <div className="mt-6">
      <p className="font-semibold opacity-60">Platforms</p>
      {platforms?.map((platform, index) => (
        <span key={platform.platform.id}>
          {platform.platform.name}
          {index !== platforms.length - 1 ? ", " : ""}
        </span>
      ))}
      .
    </div>
  );
};

export default GamePagePlatforms;
