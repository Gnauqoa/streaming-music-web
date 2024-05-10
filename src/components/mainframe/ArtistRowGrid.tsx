import ArtistRowItem from "./ArtistRowItem";

const ArtistRowGrid = ({ list }: { list: any[] }) => {
  return (
    <div className="ArtistRowGrid">
      {list.map((item: any, index: number) => (
        <ArtistRowItem key={index} info={item} />
      ))}
    </div>
  );
};

export default ArtistRowGrid;
