import React from "react";

const Alert = ({ error }) => {
  return (
    <React.Fragment>
      <div class="space-y-8 p-4 flex justify-between items-center">
        <div
          class="bg-red-50 text-red-800 p-6 rounded-lg relative"
          role="alert"
        >
          <div class="mb-3 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-[18px] cursor-pointer fill-red-500 inline mr-3 shrink-0"
              viewBox="0 0 32 32"
            >
              <path
                d="M16 1a15 15 0 1 0 15 15A15 15 0 0 0 16 1zm6.36 20L21 22.36l-5-4.95-4.95 4.95L9.64 21l4.95-5-4.95-4.95 1.41-1.41L16 14.59l5-4.95 1.41 1.41-5 4.95z"
                data-original="#ea2d3f"
              />
            </svg>
            <p class="font-semibold text-[15px] mr-3">{error}</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Alert;
