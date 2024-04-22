import React from "react";
import TrackListItem from "./TrackListItem";

const TrackList = React.forwardRef(
  (
    {
      tracks,
      styleName,
      highlight,
      playContextTrack,
    }: {
      tracks: any[];
      styleName?: string;
      highlight?: string;
      playContextTrack: (track: any) => void;
    },
    ref
  ) => {
    return (
      <div className="trackListContainer">
        <ol className="trackList">
          {tracks.map((track: { id: string }, index: number) => {
            if (index + 1 < tracks.length) {
              return (
                <TrackListItem
                  track={track}
                  key={track.id}
                  styleName={styleName}
                  highlight={track.id === highlight}
                  playContextTrack={playContextTrack}
                />
              );
            } else {
              return (
                <TrackListItem
                  ref={ref}
                  track={track}
                  key={track.id}
                  styleName={styleName}
                  highlight={track.id === highlight}
                  playContextTrack={playContextTrack}
                />
              );
            }
          })}
        </ol>
      </div>
    );
  }
);

export default TrackList;
