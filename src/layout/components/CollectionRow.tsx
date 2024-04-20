import React from "react";
import RowTitle from "./RowTitle";
import RowGrid from "./RowGrid";

const CollectionRow = React.forwardRef(
  (
    { name, playlists, id }: { name: string; playlists: any[]; id: string },
    ref
  ) => {
    return (
      <div className="CollectionRow">
        <RowTitle title={name} id={id} />
        <RowGrid ref={ref} playlists={playlists} />
      </div>
    );
  }
);

export default CollectionRow;
