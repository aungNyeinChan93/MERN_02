import { useState } from "react";

const useLogin = () => {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const login = async (endpoint, payload) => {
    try {
      setLoading(true);
      const response = await fetch(`${import.meta.env.VITE_URL}/${endpoint}`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error);
      }
      if (data.mess === "success") {
        setLoading(false);
        setError(null);
        return data;
      }
    } catch (error) {
      setError(error.message);
      console.error(error);
    }
  };

  return { login, isLoading, error };
};

export default useLogin;
