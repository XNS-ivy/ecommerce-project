import { useState, useEffect } from 'react';

export interface UseFetchReturn<T> {
  data:  T | null;
  isLoading: boolean;
  error: Error | null;
  refetch: () => void;
}

export const useFetch = <T,>(
  fetchFn: () => Promise<T>,
  dependencies:  any[] = []
): UseFetchReturn<T> => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const result = await fetchFn();
      setData(result);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Unknown error'));
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);

  return {
    data,
    isLoading,
    error,
    refetch: fetchData,
  };
};