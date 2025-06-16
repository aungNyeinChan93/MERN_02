import React, { useContext } from "react";
import useWorkoutContext from "../../tests/testworkout";
import { workoutContext } from "../../contexts/WorkoutProvider";

const AboutPage = () => {
  const { workouts, setWorkouts } = useWorkoutContext();
  // const { workouts } = useContext(workoutContext);
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
