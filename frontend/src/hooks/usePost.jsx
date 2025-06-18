import { useState } from "react";

const usePost = () => {
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
      const getData = await response.json();

      if (!response.ok) {
        throw new Error(getData.error);
      }
      if (getData.mess === "success") {
        setData(getData.result);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return { fetchPost, isLoading, error };
};

export default usePost;
