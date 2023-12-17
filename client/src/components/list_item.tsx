import React from "react";
import { Misdemeanour } from "../types/misdemeanours.types";

interface ListItemProps {
  item: Misdemeanour;
}

const ListItem: React.FC<ListItemProps> = ({ item }) => (
  <div key={item.citizenId} className="border border-gray-400 grid grid-cols-4">
    <p>{item.citizenId}</p>
    <p>{item.date}</p>
    <p>{item.misdemeanour}</p>
    <p>{item.date}</p>
  </div>
);

export default ListItem;
