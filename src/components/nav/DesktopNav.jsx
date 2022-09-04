import {
  Add,
  Help,
  LocalParking,
  Notifications,
  Search,
} from "@mui/icons-material";
import { IconButton, Paper } from "@mui/material";

const DesktopNav = () => {
  return (
    <div className="hidden md:flex justify-between items-center py-1 border-solid border border-b-[1px] border-bg-slate-200 shadow-md mb-2 px-4">
      <div>
        <h1>People</h1>
        <div className="w-12 bg-indigo-500 h-[3px] absolute top-[3.4rem]"></div>
      </div>
      <div>
        <Paper
          component="form"
          className="border-solid border-[1px] rounded-full shadow-none px-2 bg-slate-200 "
        >
          <Search className="text-lg text-slate-500 mr-8 ml-2" />
          <input
            className="w-[25rem] placeholder:text-xs bg-transparent pt-1 pb-2"
            type="text"
            placeholder="Search by name, email, domain or phone number "
          />
        </Paper>
      </div>
      <div>
        <IconButton size="large" edge="start" color="inherit" aria-label="menu">
          <Add />
        </IconButton>
        <IconButton size="large" edge="start" color="inherit" aria-label="menu">
          <Notifications />
        </IconButton>
        <IconButton size="large" edge="start" color="inherit" aria-label="menu">
          <LocalParking className="bg-gray-700 rounded p-[4px] text-white" />
        </IconButton>
        <IconButton size="large" edge="start" color="inherit" aria-label="menu">
          <Help className="text-gray-500" />
        </IconButton>
      </div>
    </div>
  );
};

export default DesktopNav;
