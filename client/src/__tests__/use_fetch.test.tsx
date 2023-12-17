import { renderHook, act } from "@testing-library/react";
import { waitFor } from "@testing-library/dom";
import { useFetch, FetchProps } from "../hooks/use_fetch";

const mockFetch = jest.fn();

global.fetch = mockFetch;

describe("useFetch", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should fetch data correctly", async () => {
    const url = "https://example.com/api/data";

    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve({ mockData: "test data" }),
    });

    const { result } = renderHook(() => useFetch(url));

    await act(async () => {
      await waitFor(() => result.current.data !== undefined);
    });

    const expectedResult: FetchProps<typeof result.current.data> = {
      data: { mockData: "test data" },
      loading: false,
      error: null,
    };

    expect(result.current).toEqual(expectedResult);
  });

  it("should handle fetch error", async () => {
    const url = "https://example.com/api/error";

    mockFetch.mockResolvedValueOnce({
      ok: false,
      status: 404,
      json: () => Promise.resolve({ error: "Not Found" }),
    });

    const { result } = renderHook(() => useFetch(url));

    await act(async () => {
      await waitFor(() => result.current.data !== undefined);
    });

    const expectedResult: FetchProps<typeof result.current.data> = {
      data: null,
      loading: false,
      error: new Error("HTTP error! Status: 404"),
    };

    expect(result.current).toEqual(expectedResult);
  });
});
