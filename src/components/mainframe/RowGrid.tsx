import React from "react";
import PlayCard from "./PlayCard";

const RowGrid = React.forwardRef(({ data }: { data: any[] }, ref) => {
  return (
    <div className="RowGrid">
      {/* {data.map((item, index) => {
        if (item) {
          if (index + 1 < item.length)
            return (
              <PlayCard
                key={item.id}
                info={item}
                type={item.type}
              />
            );
          else
            return (
              <PlayCard
                ref={ref}
                key={item.id}
                info={item}
                type={item.type}
              />
            );
        } else return null;
      })} */}
    </div>
  );
});

export default RowGrid;
