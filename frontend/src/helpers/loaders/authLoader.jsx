// Loader function to check user authentication before accessing protected routes.
// - Redirects to login if no token is found or if token is invalid.
// - Fetches user info from the backend if token is valid.

import { redirect } from "react-router";

export const authLoader = async () => {
  const token = JSON.parse(localStorage.getItem("token"));
  if (!token) {
    return redirect("/auth/login");
  }
  const response = await fetch(
    `${import.meta.env.VITE_URL}/api/auth/userInfo`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  if (!response.ok) {
    return redirect("/auth/login");
  }
  const { result: auth } = await response.json();
  return { auth };
};
