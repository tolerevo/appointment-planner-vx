import React from "react";
import { Tile } from '../tile/Tile';

export const TileList = ({ tiles }) => {
  return (
    <div>
      {
        tiles.map((tile, index) => {
          const { name, ...description } = tile;
          return <Tile name={name} key={index} description={description} />;
        })
      }
    </div>
  );
};
