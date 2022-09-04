import { ModeComment } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";

const Help = () => {
  return (
    <IconButton className="fixed bottom-3 md:bottom-10 right-3 md:right-10">
      <p className="absolute text-lg font-semibold text-pink-600 top-[15px] z-49">
        ?
      </p>
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-pink-600 shadow-md shadow-gray-400 ">
        <ModeComment className="text-white text-3xl" />
      </div>
    </IconButton>
  );
};

export default Help;
