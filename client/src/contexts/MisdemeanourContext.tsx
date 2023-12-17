import React, { createContext, useContext, useState } from "react";

interface MisdemeanourContextProps {
  resultsCount: number;
  setResultsCount: React.Dispatch<React.SetStateAction<number>>;
  filter: string | null;
  setFilter: React.Dispatch<React.SetStateAction<string | null>>;
}

const MisdemeanourContext = createContext<MisdemeanourContextProps | undefined>(undefined);

export const MisdemeanourProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [resultsCount, setResultsCount] = useState<number>(10);
  const [filter, setFilter] = useState<string | null>(null);

  const contextValue = {
    resultsCount,
    setResultsCount,
    filter,
    setFilter,
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
