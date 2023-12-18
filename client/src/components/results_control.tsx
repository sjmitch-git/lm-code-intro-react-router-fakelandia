import { useMisdemeanourContext } from "../contexts/MisdemeanourContext";

const ResultsControl: React.FC = () => {
  const { resultsCount, setResultsCount } = useMisdemeanourContext();

  const handleAmountChange = (newAmount: number) => {
    setResultsCount(newAmount);
  };

  return (
    <div>
      <h3>Set number of results:</h3>
      {[1, 5, 10, 20, 50].map((option) => (
        <label key={option} className={`btn ${resultsCount === option ? "active" : ""}`}>
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
  );
};

export default ResultsControl;
