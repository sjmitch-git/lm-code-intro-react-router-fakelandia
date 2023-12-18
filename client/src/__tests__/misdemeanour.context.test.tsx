import React from "react";
import { render, act } from "@testing-library/react";
import { MisdemeanourProvider, useMisdemeanourContext } from "../contexts/MisdemeanourContext";

describe("MisdemeanourContext", () => {
  it("should provide the correct context values", () => {
    const TestComponent: React.FC = () => {
      const contextValues = useMisdemeanourContext();

      expect(contextValues).toBeDefined();
      expect(contextValues?.resultsCount).toBe(10);
      expect(contextValues?.setResultsCount).toBeInstanceOf(Function);
      expect(contextValues?.filter).toBe(null);
      expect(contextValues?.setFilter).toBeInstanceOf(Function);

      return <div>Test Component</div>;
    };

    act(() => {
      render(
        <MisdemeanourProvider>
          <TestComponent />
        </MisdemeanourProvider>
      );
    });
  });
});
