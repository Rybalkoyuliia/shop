import { useEffect, useState } from "react";

export const useHTTP = (fn, params) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fn(params)
      .then((data) => setData(data))
      .catch((error) => setError(error.message));
  }, [fn, params]);
  return [data, setData, error];
};
