import { useMisdemeanourContext } from "../contexts/MisdemeanourContext";

const FilterControl: React.FC = () => {
  const { filter, setFilter } = useMisdemeanourContext();

  const filters = ["rudeness", "vegetables", "lift", "united"];

  const handleFilterChange = (newFilter: string) => {
    setFilter(newFilter);
  };

  const handleKeyDown = (event: React.KeyboardEvent, newFilter: string) => {
    if (event.code === "Enter") {
      handleFilterChange(newFilter);
    }
  };

  const clearFilter = () => {
    setFilter(null);
  };

  return (
    <div>
      <h3 className="mb-2">Filter by misdemeanour:</h3>
      <div className="flex gap-2 flex-wrap">
        {filters.map((option) => (
          <label
            key={option}
            className={`btn capitalize ${filter === option ? "active" : ""}`}
            tabIndex={0}
            onKeyDown={(event) => handleKeyDown(event, option)}
          >
            <input
              type="radio"
              name="filter"
              value={option}
              checked={filter === option}
              tabIndex={1}
              onChange={() => handleFilterChange(option)}
            />
            {option}
          </label>
        ))}
        <button className={`btn-link text-info ${!filter ? "!hidden" : ""}`} onClick={clearFilter}>
          Clear Filter
        </button>
      </div>
    </div>
  );
};

export default FilterControl;
