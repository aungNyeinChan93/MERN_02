import React, { useContext, useState } from "react";
import { formatISO9075 } from "date-fns";
import { workoutContext } from "../../contexts/WorkoutProvider";
import { authContext } from "../../contexts/AuthContextProvider";

const WorkoutCard = ({ title, read, load, createdAt, _id }) => {
  const [error, setError] = useState(null);
  const { token } = useContext(authContext);

  const { setWorkouts } = useContext(workoutContext);

  const deleteWorkout = async (e) => {
    try {
      e.preventDefault();
      const response = await fetch(
        `${import.meta.env.VITE_URL}/api/workouts/${_id}`,
        {
          method: "Delete",
          credentials: "include",
          headers: {
            Authorization: `Bearer ${JSON.stringify(token)}`,
          },
        }
      );
      const deleteData = await response.json();

      if (!response.ok) {
        if (deleteData.error) {
          throw new Error(deleteData.error);
        }
        throw new Error(`${response.status} - delete fail`);
      }
      if (deleteData.mess === "success") {
        setWorkouts((pre) =>
          pre.filter((w) => w._id !== (deleteData.result._id || _id))
        );
      }
    } catch (error) {
      setError(error.message);
      console.error(error);
    }
  };

  return (
    <React.Fragment>
      <div className="bg-white [box-shadow:0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full max-w-sm rounded-lg overflow-hidden mx-auto mt-4">
        <div className="p-6">
          <p className="mt-2 text-lg pb-2 capitalize font-bold text-slate-500 leading-relaxed">
            {title}
          </p>
          <h3 className="text-md font-semibold text-red-400">
            Reps - {read} | Load - {load} kg
          </h3>
          <p className="text-blue-400 text-sm mt-4 ">
            ⌚ {formatISO9075(createdAt, { format: "extended" })}
          </p>
          {/* <button
            type="button"
            className="mt-6 px-5 py-2.5 rounded-lg text-white text-sm font-medium tracking-wider border-none outline-none bg-yellow-500 hover:bg-yellow-700 cursor-pointer"
          >
            ➡️ edit
          </button> */}
          <button
            onClick={deleteWorkout}
            type="button"
            className="mt-6 px-4 py-2 rounded-lg text-white text-xs font-medium tracking-wider border-none outline-none bg-indigo-300 hover:bg-gray-700 cursor-pointer "
          >
            ❌
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default WorkoutCard;
