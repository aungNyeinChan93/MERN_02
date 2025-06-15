import { useContext } from "react";
import { workoutContext } from "../contexts/WorkoutProvider";

const useWorkoutContext = () => {
  const { workouts, setWorkouts } = useContext(workoutContext);

  return { workouts, setWorkouts };
};

export default useWorkoutContext;
