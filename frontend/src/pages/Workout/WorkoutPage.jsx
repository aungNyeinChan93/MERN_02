import React from "react";
import useGet from "../../hooks/useGet";
const WorkoutPage = () => {
  const { data, isLoading, error } = useGet(
    `${import.meta.env.VITE_URL}/api/workouts`
  );

  //   console.log(data);

  return (
    <React.Fragment>
      <h1>WorkoutPage</h1>
      {isLoading && (
        <>
          <p>Loading!</p>
        </>
      )}
      {data && data.length > 0 && (
        <>
          {data?.map((workout) => {
            return (
              <ul key={workout._id}>
                <li>{workout.title}</li>
              </ul>
            );
          })}
        </>
      )}
      {error && <div>{error}</div>}
    </React.Fragment>
  );
};

export default WorkoutPage;
