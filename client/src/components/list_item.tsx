import React from "react";
import { Misdemeanour, MisdemeanourInfo } from "../types/misdemeanours.types";
import misdemeanoursData from "../data/misdemeanours.json";

interface ListItemProps {
  item: Misdemeanour;
}

const misdemeanours: MisdemeanourInfo[] = misdemeanoursData;

const getMisdemeanourInfo = (name: string): MisdemeanourInfo | undefined => {
  return misdemeanours.find((misdemeanour) => misdemeanour.name === name);
};

const ListItem: React.FC<ListItemProps> = ({ item }) => {
  const misdemeanorInfo = getMisdemeanourInfo(item.misdemeanour);

  return (
    <div
      key={item.citizenId}
      className="border-b border-gray-400 grid grid-cols-2 md:grid-cols-4 p-2"
    >
      <p>{item.citizenId}</p>
      <p>{item.date}</p>

      {misdemeanorInfo && (
        <p>
          {misdemeanorInfo.description} {misdemeanorInfo.emoji}
        </p>
      )}

      {misdemeanorInfo && (
        <figure>
          <img src="https://picsum.photos/400/300" alt={misdemeanorInfo.description} />
        </figure>
      )}
    </div>
  );
};

export default ListItem;
