import { MoreHoriz, LockOpen } from "@mui/icons-material";
import SidebarOption from "./SidebarOption";
import UserInfo from "./UserInfo";
import { useContext } from "react";
import { NavContext } from "../../context/nav-context";

const Sidebar = () => {
  const { toggleNav } = useContext(NavContext);
  return (
    <div
      className={`${
        toggleNav ? "left-[0] transition-all ease-in-out" : "left-[-100%] "
      } text-lg md:text-[0.7em] 2xl:text-[1em] bg-[#311D40] text-slate-100 w-[85%] md:w-[40%] lg:w-[20%] 2xl:w-[15%] h-screen fixed md:sticky z-40 top-[0px] transition-all ease-in-out`}
    >
      <UserInfo />
      <div>
        <ul className="h-screen md:h-full overflow-y-scroll md:overflow-y-auto">
          <SidebarOption text="DashBoard" icon="Home" num="1" />
          <div className="bg-[#655691] w-full h-[1px] my-3"></div>
          <div className="flex items-center">
            <SidebarOption text="Leads" icon="MyLocation" num="2" />
            <LockOpen className="text-base absolute right-5" />
          </div>
          <SidebarOption text="People" icon="Person" num="3" />
          <SidebarOption text="Companies" icon="Business" num="4" />
          <SidebarOption text="Pipelines" icon="DoubleArrow" num="5" />
          <SidebarOption text="Projects" icon="Work" num="6" />
          <div className="bg-[#655691] w-full h-[1px] my-3"></div>
          <SidebarOption text="Tasks" icon="CheckBox" num="7" />
          <SidebarOption text="Marketing Tools" icon="SlowMotionVideo" />
          <SidebarOption text="My Tracked Emails" icon="Email" num="8" />
          <SidebarOption text="Reports" icon="PieChart" />
          <SidebarOption text="Legacy Reports" icon="Assessment" num="9" />
          <div className="bg-[#655691] w-full h-[1px] my-3"></div>
          <SidebarOption text="Settings" icon="Settings" num="0" />
        </ul>
        <div className="absolute bottom-24 md:bottom-3 w-full">
          <div className="flex justify-between items-center mx-3">
            <h1 className="text-2xl font-serif font-semibold cursor-pointer">
              :copper
            </h1>
            <MoreHoriz className="cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
