import { useEffect, useState } from "react";

import SearchRowTitle from "./SearchRowTitle";
import SearchRowGrid from "./SearchRowGrid";

export default function SearchRow({
  title,
  type,
  query,
}: {
  title: string;
  type: string;
  query: string;
}) {
  const [result, setResult] = useState([]);
  const [formatedQuery, setformatedQuery] = useState("");

  useEffect(() => {
    const formatedQuery = query.toLowerCase().split("").join("+");
    setformatedQuery(formatedQuery);
  }, [query]);

  return (
    <div
      className="CollectionRow"
      style={{ display: result.length === 0 ? "none" : "grid" }}
    >
      <SearchRowTitle title={title} />
      <SearchRowGrid type={type} info={result} />
    </div>
  );
}
