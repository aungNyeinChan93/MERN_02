import React, { useState } from "react";
import { useNavigate } from "react-router";

const WorkoutCreateForm = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [read, setRead] = useState("");
  const [load, setLoad] = useState("");

  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const createWorkout = async (e) => {
    e.preventDefault();
    try {
      // check in clinet side
      if (!title || !read || !load) {
        throw new Error("some fields are required");
      }

      // fetch api
      const response = await fetch(`${import.meta.env.VITE_URL}/api/workouts`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, read, load }),
      });

      if (!response.ok) {
        // error handle from server
        throw new Error(await response.json().error);
      }

      const data = await response.json();
      if (data.mess === "success") {
        // console.log(data.result);
        setError(false);
        setErrorMessage("");
        return navigate("/workouts");
      }
    } catch (error) {
      console.error(error.message);
      setError(true);
      setErrorMessage(error.message);
    }
  };
  return (
    <React.Fragment>
      <form
        className="space-y-4 max-w-md mx-auto mt-4"
        onSubmit={createWorkout}
      >
        {errorMessage && (
          <>
            <p className="text-sm text-red-600">{errorMessage}</p>
          </>
        )}

        <input
          type="text"
          placeholder="Enter Title"
          className={
            error
              ? "px-4 py-3 text-slate-900 bg-gray-100 w-full text-sm outline-none border !border-red-600 focus:border-blue-500 rounded"
              : "px-4 py-3 text-slate-900 bg-gray-100 w-full text-sm outline-none border-b-2 border-transparent focus:border-blue-500 rounded"
          }
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="number"
          placeholder="Enter Rept"
          className={
            error
              ? "px-4 py-3 text-slate-900 bg-gray-100 w-full text-sm outline-none border !border-red-600 focus:border-blue-500 rounded"
              : "px-4 py-3 text-slate-900 bg-gray-100 w-full text-sm outline-none border-b-2 border-transparent focus:border-blue-500 rounded"
          }
          value={read}
          onChange={(e) => setRead(e.target.value)}
        />

        <input
          type="number"
          placeholder="Enter Load"
          className={
            error
              ? "px-4 py-3 text-slate-900 bg-gray-100 w-full text-sm outline-none border !border-red-600 focus:border-blue-500 rounded"
              : "px-4 py-3 text-slate-900 bg-gray-100 w-full text-sm outline-none border-b-2 border-transparent focus:border-blue-500 rounded"
          }
          value={load}
          onChange={(e) => setLoad(e.target.value)}
        />

        <button
          type="submit"
          className="!mt-8 w-full px-4 py-2.5 mx-auto block text-sm font-medium bg-blue-500 text-white rounded hover:bg-blue-600 cursor-pointer"
        >
          Submit
        </button>
      </form>
    </React.Fragment>
  );
};

export default WorkoutCreateForm;
