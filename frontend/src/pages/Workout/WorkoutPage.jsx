import React from "react";
import useGet from "../../hooks/useGet";
import WorkoutCard from "../../components/other/WorkoutCard";
import Spinner from "../../components/base/Spinner";
import Alert from "../../components/base/Alert";
import { Link } from "react-router";

const WorkoutPage = () => {
  const { data, isLoading, error } = useGet(
    `${import.meta.env.VITE_URL}/api/workouts`
  );

  //   console.log(data);
  return (
    <React.Fragment>
      {isLoading && (
        <>
          <div className="w-full min-h-screen flex justify-center items-center">
            <Spinner />
          </div>
        </>
      )}

      {data && data.length > 0 && (
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
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 py-2">
            {data?.map((workout) => {
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
