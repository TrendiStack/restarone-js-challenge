import React from "react";

const DetailsSelect = ({ title }) => {
  return (
    <select className="w-full text-xs" name="rating" id="rating">
      <option defaultValue disabled>
        {title}
      </option>
      <option value="test1">test1</option>
      <option value="test2">test2</option>
      <option value="test3">test3</option>
    </select>
  );
};

export default DetailsSelect;
