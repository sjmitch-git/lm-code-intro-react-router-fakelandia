import { useMisdemeanourContext } from "../contexts/MisdemeanourContext";

const ResultsControl: React.FC = () => {
  const { resultsCount, setResultsCount } = useMisdemeanourContext();

  const handleAmountChange = (newAmount: number) => {
    setResultsCount(newAmount);
  };

  const handleKeyDown = (event: React.KeyboardEvent, newAmount: number) => {
    if (event.code === "Enter") {
      handleAmountChange(newAmount);
    }
  };

  return (
    <div>
      <h3 className="mb-2">Set number of results:</h3>
      <div className="flex gap-2 flex-wrap">
        {[1, 5, 10, 20, 50].map((option) => (
          <label
            key={option}
            className={`btn ${resultsCount === option ? "active" : ""}`}
            tabIndex={0}
            onKeyDown={(event) => handleKeyDown(event, option)}
          >
            <input
              type="radio"
              name="amount"
              value={option}
              checked={resultsCount === option}
              onChange={() => handleAmountChange(option)}
            />
            {option}
          </label>
        ))}
      </div>
    </div>
  );
};

export default ResultsControl;
