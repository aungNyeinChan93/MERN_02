import React, { createContext, useState } from "react";

export const workoutContext = createContext();

const WorkoutProvider = ({ children }) => {
  const [workouts, setWorkouts] = useState([]);
  return (
    <workoutContext.Provider value={{ workouts, setWorkouts }}>
      {children}
    </workoutContext.Provider>
  );
};

export default WorkoutProvider;
