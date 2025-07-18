import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import router from "./router.js";
import { RouterProvider } from "react-router";
import WorkoutProvider from "./contexts/WorkoutProvider.jsx";
import AuthContextProvider from "./contexts/AuthContextProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthContextProvider>
      <WorkoutProvider>
        <RouterProvider router={router} />
      </WorkoutProvider>
    </AuthContextProvider>
  </StrictMode>
);
