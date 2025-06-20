import React, { useContext, useEffect, useState } from "react";
import useGet from "../../hooks/useGet";
import WorkoutCard from "../../components/other/WorkoutCard";
import Spinner from "../../components/base/Spinner";
import Alert from "../../components/base/Alert";
import { Link } from "react-router";
import { workoutContext } from "../../contexts/WorkoutProvider";
import { authContext } from "../../contexts/AuthContextProvider";

const WorkoutPage = () => {
  // const token = JSON.parse(localStorage.getItem("token"));
  // console.log(token);

  const { token } = useContext(authContext);

  const { data, isLoading, error } = useGet(
    `${import.meta.env.VITE_URL}/api/workouts`,
    JSON.stringify(token)
  );

  const [seeMore, setSeeMore] = useState(true);

  const { workouts, setWorkouts } = useContext(workoutContext);

  useEffect(() => {
    if (data) {
      setWorkouts(data);
    }
  }, [data, setWorkouts]);

  const latestWorkouts = workouts && workouts.slice(0, 8);

  return (
    <React.Fragment>
      {isLoading && (
        <>
          <div className="w-full min-h-screen flex justify-center items-center">
            <Spinner />
          </div>
        </>
      )}

      {data && data.length > 0 && workouts && (
        <>
          <div className="p-4 bg-slate-700  ">
            <div className="flex justify-end items-center">
              <Link
                to={"/workouts/create"}
                className="px-4 py-2 bg-blue-300 rounded-xl"
              >
                ➕ Workout
              </Link>
            </div>
          </div>
          <div className="mt-2">
            <button
              className="px-4 py-2 bg-indigo-500 rounded-lg"
              onClick={() => setSeeMore((pre) => !pre)}
            >
              {seeMore ? "Latest " : "Show All"}
            </button>
          </div>
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 py-2">
            {seeMore &&
              workouts?.map((workout) => {
                return <WorkoutCard key={workout._id} {...workout} />;
              })}
            {!seeMore &&
              latestWorkouts?.map((workout) => {
                return <WorkoutCard key={workout._id} {...workout} />;
              })}
          </div>
        </>
      )}

      {error && (
        <div className="w-full min-h-screen flex justify-center items-center">
          <Alert error={error} />
        </div>
      )}
    </React.Fragment>
  );
};

export default WorkoutPage;
