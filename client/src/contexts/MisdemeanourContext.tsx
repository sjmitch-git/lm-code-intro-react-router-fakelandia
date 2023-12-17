import React, { createContext, useContext, useState } from "react";

interface MisdemeanourContextProps {
  resultsCount: number;
  setResultsCount: React.Dispatch<React.SetStateAction<number>>;
  filters: string[];
  setFilters: React.Dispatch<React.SetStateAction<string[]>>;
}

const MisdemeanourContext = createContext<MisdemeanourContextProps | undefined>(undefined);

export const MisdemeanourProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [resultsCount, setResultsCount] = useState<number>(10);
  const [filters, setFilters] = useState<string[]>([]);

  const contextValue = {
    resultsCount,
    setResultsCount,
    filters,
    setFilters,
  };

  return (
    <MisdemeanourContext.Provider value={contextValue}>{children}</MisdemeanourContext.Provider>
  );
};

export const useMisdemeanourContext = () => {
  const context = useContext(MisdemeanourContext);
  if (!context) {
    throw new Error("useMisdemeanourContext must be used within a MisdemeanourProvider");
  }
  return context;
};
