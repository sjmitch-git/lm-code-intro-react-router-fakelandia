import { useState } from "react";

interface PostOptions {
  method?: "GET" | "POST" | "PUT" | "DELETE";
  headers?: Record<string, string>;
  body?: string;
}

interface UsePostOptions {
  url: string;
  data?: Record<string, any>;
  options?: PostOptions;
}

interface UsePostResult<T> {
  response: T | null;
  error: Error | null;
  isLoading: boolean;
  postData: (data: Record<string, any>, options?: PostOptions) => Promise<void>;
}

const usePost = <T>({ url }: UsePostOptions): UsePostResult<T> => {
  const [response, setResponse] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const postData = async (data: Record<string, any>, options?: PostOptions) => {
    try {
      setIsLoading(true);

      const requestOptions: RequestInit = {
        method: options?.method || "POST",
        headers: {
          "Content-Type": "application/json",
          ...options?.headers,
        },
        body: JSON.stringify(data),
        ...options,
      };

      const res = await fetch(url, requestOptions);

      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }

      const result: T = await res.json();

      setIsLoading(false);

      setResponse(result);
    } catch (error) {
      setError(error as Error);
    } finally {
      setIsLoading(false);
    }
  };

  return { response, error, isLoading, postData };
};

export default usePost;
