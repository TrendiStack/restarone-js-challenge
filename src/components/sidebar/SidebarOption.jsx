import {
  Close,
  Settings,
  PieChart,
  Email,
  SlowMotionVideo,
  Work,
  DoubleArrow,
  Business,
  Person,
  Home,
  Assessment,
  CheckBox,
  MoreHoriz,
  MyLocation,
  LockOpen,
} from "@mui/icons-material";
import React from "react";

const SidebarOption = ({ text, icon, num }) => {
  const Icons = {
    Home: <Home />,
    MyLocation: <MyLocation />,
    Person: <Person />,
    Business: <Business />,
    DoubleArrow: <DoubleArrow />,
    Work: <Work />,
    SlowMotionVideo: <SlowMotionVideo />,
    CheckBox: <CheckBox />,
    Email: <Email />,
    PieChart: <PieChart />,
    Assessment: <Assessment />,
    Settings: <Settings />,
    MoreHoriz: <MoreHoriz />,
  };
  return (
    <div className="flex items-center w-full cursor-pointer hover:bg-[#655691]">
      <div
        className={`${
          num
            ? "flex items-center justify-center w-4 h-4 bg-indigo-300 rounded mt-1 ml-2"
            : "ml-6"
        } `}
      >
        {num && <p className="text-[11px] text-indigo-900 font-bold">{num}</p>}
      </div>
      <li className="py-1 2xl:py-3 ml-2 ">
        <span className="mr-4">{Icons[icon]}</span>
        {text}
      </li>
    </div>
  );
};

export default SidebarOption;
