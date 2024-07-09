import { useEffect, useState } from "react";
import axios from "axios";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(url)
      .then((data) => setData(data.data))
      .catch((e) => setError(e))
      .finally(() => setIsLoading(false));
  }, [data]);

  return { data, isLoading, error };
};
