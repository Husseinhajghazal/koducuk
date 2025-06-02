import React from "react";

const ProgressBar = ({ percentage }) => {
  return (
    <div className="w-full h-3 rounded-2xl bg-kc-gray/30 overflow-hidden">
      <div
        className="h-full bg-ai-purple transition-all duration-300 rounded-2xl"
        style={{ width: percentage + "%" }}
      />
    </div>
  );
};

export default ProgressBar;
