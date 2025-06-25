import { useState } from "react";
import { useApi } from "./ApiContext";

/**
 * Returns a function to mutate some data via the API, as well as some state
 * that tracks the response of that mutation request.
 */
export default function useMutation() {
  const { request, invalidateTags } = useApi();

  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const mutate = async ({ method, resource, body, tagsToInvalidate }) => {
    setLoading(true);
    setError(null);
    try {
      const result = await request(resource, {
        method,
        ...(body ? { body: JSON.stringify(body) } : {}),
      });
      setData(result);
      if (tagsToInvalidate) invalidateTags(tagsToInvalidate);
    } catch (e) {
      console.error(e);
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  return { mutate, data, loading, error };
}
