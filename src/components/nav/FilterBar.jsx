import {
  ArrowDropDown,
  FilterList,
  Person,
  Search,
  Settings,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";
import data from "../../mock-data";

const FilterBar = () => {
  return (
    <div className="hidden lg:flex justify-between items-center py-1 pl-3 pr-7 mb-1">
      <div className="flex gap-4 items-center">
        <div className="border-solid border py-1 pr-1 pl-3 text-sm cursor-pointer">
          <p>
            All People ({data.length})
            <ArrowDropDown />
          </p>
        </div>
        <div className="flex items-center bg-indigo-700 text-white font-medium text-[0.70rem] rounded-full cursor-pointer">
          <p className="ml-3">Add New</p>
          <div className="w-[1px] bg-indigo-900 ml-3 py-3"></div>
          <ArrowDropDown className="text-base mx-2" />
        </div>
      </div>
      <div className="flex items-center text-sm text-gray-500">
        <IconButton>
          <Search className="text-[20px]" />
        </IconButton>
        <IconButton>
          <Person className="text-[20px]" />
        </IconButton>
        <IconButton>
          <Settings className="text-[20px]" />
        </IconButton>
        <div className="flex items-center">
          <IconButton>
            <FilterList className="text-[20px]" />
          </IconButton>
          <p>Filters</p>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
