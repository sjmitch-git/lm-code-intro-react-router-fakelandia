import { useFetch } from "../hooks/use_fetch";
import { Misdemeanour } from "../types/misdemeanours.types";
import ListItem from "./list_item";

interface listProps {
  amount?: number;
  filter?: string;
}

const List: React.FC<listProps> = ({ amount = 20, filter }) => {
  const { data, loading, error } = useFetch<{ misdemeanours: Misdemeanour[] }>(
    `http://localhost:8080/api/misdemeanours/${amount}`
  );

  const filteredData =
    data?.misdemeanours.filter((item) => (filter ? item.misdemeanour === filter : true)) || [];

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error.message}</p>
      ) : (
        <div>
          <div className="border border-gray-400 grid grid-cols-4">
            <p>Citizen ID:</p>
            <p>Date:</p>
            <p>Misdemeanour:</p>
            <p>Punishment:</p>
          </div>
          {filteredData.map((item) => (
            <ListItem key={item.citizenId} item={item} />
          ))}
        </div>
      )}
    </>
  );
};

export default List;
