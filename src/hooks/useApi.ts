import { useState, useCallback } from 'react';
import { toast } from 'react-hot-toast';

interface UseApiOptions<T> {
  onSuccess?: (data: T) => void;
  onError?: (error: Error) => void;
  successMessage?: string;
  errorMessage?: string;
}

export function useApi<T>() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<T | null>(null);

  const execute = useCallback(
    async <R = T>(
      promise: Promise<R>,
      options: UseApiOptions<R> = {}
    ): Promise<R | null> => {
      const {
        onSuccess,
        onError,
        successMessage = 'Operation successful',
        errorMessage = 'Something went wrong',
      } = options;

      try {
        setIsLoading(true);
        setError(null);
        const result = await promise;
        setData(result as unknown as T);
        
        if (successMessage) {
          toast.success(successMessage);
        }
        
        onSuccess?.(result);
        return result;
      } catch (e) {
        const error = e instanceof Error ? e : new Error(errorMessage);
        setError(error);
        
        if (errorMessage) {
          toast.error(errorMessage);
        }
        
        onError?.(error);
        return null;
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  const reset = useCallback(() => {
    setData(null);
    setError(null);
    setIsLoading(false);
  }, []);

  return {
    execute,
    reset,
    isLoading,
    error,
    data,
  };
} 