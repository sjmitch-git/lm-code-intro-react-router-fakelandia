import { useEffect, useState } from "react";

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
}

const usePost = <T>({ url, data, options }: UsePostOptions): UsePostResult<T> => {
  const [response, setResponse] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const postData = async () => {
      try {
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
        const result: T = await res.json();

        setResponse(result);
        setIsLoading(false);
      } catch (error) {
        setError(error as Error);
        setIsLoading(false);
      }
    };

    postData();
  }, [url, data, options]);

  return { response, error, isLoading };
};

export default usePost;
