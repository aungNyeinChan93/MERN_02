import { useEffect, useState } from "react";

const useGet = (url, token) => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState();

  const getFetchData = async (url, token) => {
    try {
      // throw new Error("testing errorerrorerrorerrorerrorerror!");
      setLoading(true);
      const response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        setError("Fetching fail!");
        setLoading(false);
        return;
      }
      const getData = await response.json();
      if (getData.mess === "success") {
        setData(getData.result);
      }
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    getFetchData(url, token);
  }, [url]);

  return { data, isLoading, error };
};

export default useGet;
