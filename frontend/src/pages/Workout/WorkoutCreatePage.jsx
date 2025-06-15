import React from "react";
import WorkoutCreateForm from "../../components/other/WorkoutCreateForm";

const WorkoutCreatePage = () => {
  return (
    <React.Fragment>
      <section className="h-100 flex justify-center items-center">
        <WorkoutCreateForm />
      </section>
    </React.Fragment>
  );
};

export default WorkoutCreatePage;
