import React from "react";
import useWorkoutContext from "../../tests/testworkout";

const AboutPage = () => {
  const { workouts, setWorkouts } = useWorkoutContext();
  return (
    <React.Fragment>
      <h1>AboutPage</h1>

      {workouts && (
        <>
          {workouts.map((workout) => {
            return <div key={workout._id}>{workout.title}</div>;
          })}
        </>
      )}
    </React.Fragment>
  );
};

export default AboutPage;
