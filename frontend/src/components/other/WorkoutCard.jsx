import React from "react";
import { formatISO9075 } from "date-fns";

const WorkoutCard = ({ title, read, load, createdAt }) => {
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
          <button
            type="button"
            className="mt-6 px-5 py-2.5 rounded-lg text-white text-sm font-medium tracking-wider border-none outline-none bg-orange-500 hover:bg-orange-700 cursor-pointer"
          >
            ➡️ edit
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default WorkoutCard;
