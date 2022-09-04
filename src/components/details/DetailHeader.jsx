import React from "react";

const DetailHeader = ({ title, sign, input, blueText }) => {
  return (
    <div className="mt-3">
      <h4 className="text-xs">
        {title} {sign && <span className="text-red-500">{sign}</span>}
      </h4>
      <p className={`${blueText && "text-blue-700"} text-xs`}>{input}</p>
    </div>
  );
};

export default DetailHeader;
