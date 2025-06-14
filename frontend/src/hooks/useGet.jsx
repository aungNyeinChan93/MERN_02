import { useEffect, useState } from "react";

const useGet = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState();

  const getFetchData = async (url) => {
    try {
      setLoading(true);
      const response = await fetch(url, {
        method: "GET",
        credentials: "include",
      });
      if (!response.ok) {
        return setError(new Error("Fetching fail!"));
      }
      const getData = await response.json();
      if (getData.mess === "success") {
        setData(getData.result);
      }
      setLoading(false);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    getFetchData(url);
  }, [url]);

  return { data, isLoading, error };
};

export default useGet;
