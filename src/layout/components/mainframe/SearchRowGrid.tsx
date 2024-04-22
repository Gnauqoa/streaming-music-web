import PlayCard from "./PlayCard";

export default function RowGrid({ type, info }: { type: string; info: any[] }) {
  return (
    <div className="RowGrid">
      {info.map((item) => {
        return <PlayCard key={item.id} info={item} type={type} />;
      })}
    </div>
  );
}
