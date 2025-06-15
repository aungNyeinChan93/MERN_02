import { useEffect, useState } from "react";

const usePost = (url, payload) => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchPost = async (url, payload) => {
    try {
      setLoading(true);
      const response = await fetch(url, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("fail post data!");
      }
      const getData = await response.json();
      if (getData.mess === "success") {
        setData(getData);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchPost(url, payload);
  }, []);

  return { data, isLoading, error };
};

export default usePost;
