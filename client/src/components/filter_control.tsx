import { useMisdemeanourContext } from "../contexts/MisdemeanourContext";

const FilterControl: React.FC = () => {
  const { filter, setFilter } = useMisdemeanourContext();

  const filters = ["rudeness", "vegetables", "lift", "united"];

  const handleFilterChange = (newFilter: string) => {
    setFilter(newFilter);
  };

  const clearFilter = () => {
    setFilter(null);
  };

  return (
    <div>
      <h3>Filter by misdemeanour:</h3>
      {filters.map((option) => (
        <label key={option} className={`btn capitalize ${filter === option ? "active" : ""}`}>
          <input
            type="radio"
            name="filter"
            value={option}
            checked={filter === option}
            onChange={() => handleFilterChange(option)}
          />
          {option}
        </label>
      ))}
      <button className={`btn ${!filter ? "!hidden" : ""}`} onClick={clearFilter}>
        Clear Filter
      </button>
    </div>
  );
};

export default FilterControl;
