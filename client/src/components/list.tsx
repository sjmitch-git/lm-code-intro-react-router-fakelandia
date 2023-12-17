import { useFetch } from "../hooks/use_fetch";
import { Misdemeanour } from "../types/misdemeanours.types";
import ListItem from "./list_item";
import Loading from "./loading";
import { useMisdemeanourContext } from "../contexts/MisdemeanourContext";

interface listProps {
  filter?: string;
}

const List: React.FC<listProps> = ({ filter }) => {
  const { resultsCount } = useMisdemeanourContext();
  console.log("amount", resultsCount);
  const { data, loading, error } = useFetch<{ misdemeanours: Misdemeanour[] }>(
    `http://localhost:8080/api/misdemeanours/${resultsCount}`
  );

  const filteredData =
    data?.misdemeanours.filter((item) => (filter ? item.misdemeanour === filter : true)) || [];

  return (
    <>
      {loading ? (
        <Loading message="Fetching Data" />
      ) : error ? (
        <p className="text-center text-danger text-3xl">{error.message}</p>
      ) : (
        <div className="border border-gray-400">
          <div className="border-b border-gray-400 grid grid-cols-2 md:grid-cols-4 p-2">
            <p>Citizen ID</p>
            <p>Date</p>
            <p>Misdemeanour</p>
            <p>Punishment</p>
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
