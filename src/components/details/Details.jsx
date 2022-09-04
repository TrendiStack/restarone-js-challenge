import { East, MoreVert, OpenInNew, StarBorder } from "@mui/icons-material";
import { Avatar, Checkbox, IconButton } from "@mui/material";
import React, { useContext } from "react";
import DetailHeader from "./DetailHeader";
import DetailLabel from "./DetailLabel";
import DetailsSelect from "./DetailsSelect";
import data from "../../mock-data";
import { DetailsContext } from "../../context/details-context";

const Details = ({ userNum }) => {
  const { toggleDetails, handleDetailsToggle } = useContext(DetailsContext);
  return (
    <div
      className={`${
        toggleDetails
          ? "right-[0px] transition-all ease-in-out"
          : "right-[-150%]"
      } hidden md:block w-[30%] bg-white fixed top-0  shadow-2xl transition-all ease-in-out`}
    >
      {/* Nav */}
      <div className="flex justify-between">
        <IconButton onClick={handleDetailsToggle}>
          <East fontSize="small" />
        </IconButton>
        <div className="flex">
          <IconButton>
            <OpenInNew fontSize="small" />
          </IconButton>
          <IconButton>
            <StarBorder fontSize="small" />
          </IconButton>
          <IconButton>
            <MoreVert fontSize="small" />
          </IconButton>
        </div>
      </div>
      {/* User */}
      <div className="flex gap-2 items-center mx-2 mb-2">
        <Avatar className="w-[35px] h-[35px] text-xs">
          {data[userNum]?.first_name.split(" ")[0].split("")[0] +
            data[userNum]?.first_name.split(" ")[1].split("")[0]}
        </Avatar>
        <div>
          <p className="text-sm">{data[userNum]?.first_name}</p>
          <p className="text-xs">{data[userNum]?.company}</p>
        </div>
      </div>
      {/* Details */}
      <div className="flex justify-between mx-2 text-sm text-slate-600">
        <h3>Detail</h3>
        <h3>Activity</h3>
        <h3>Related</h3>
      </div>
      <div className="w-full h-[1px] bg-blue-200"></div>
      <div className="mx-2 overflow-auto h-[85vh] 2xl:h-[100vh] pr-3">
        <DetailHeader title="Name" sign="*" input={data[userNum]?.first_name} />
        <DetailHeader
          title="Company"
          input={data[userNum]?.comapny}
          blueText={true}
        />
        <DetailHeader title="Title" input={data[userNum]?.title} />
        <DetailHeader
          title="Work Email"
          input={data[userNum]?.email}
          blueText={true}
        />
        <DetailHeader title="Work Phone" input={data[userNum]?.phone} />

        <div className="mt-3">
          <DetailLabel title="Rating" />
          <DetailsSelect title="- Rating -" />
        </div>

        <div className="mt-3">
          <DetailLabel title="Status" />
          <DetailsSelect title="- Select Status -" />
        </div>

        <div className="mt-3">
          <DetailLabel title="Recycled Reasons" />
          <DetailsSelect title="- Select Recycled Reasons -" />
        </div>

        <DetailHeader
          title="Owner"
          input={data[userNum]?.owner}
          blueText={true}
        />

        <div className="mt-3">
          <DetailLabel title="AE Assignee" />
          <DetailsSelect title="- Select AE Assignee -" />
        </div>

        <div className="mt-3">
          <h4 className="text-xs">Account Owner</h4>
          <Checkbox size="small" defaultChecked />{" "}
        </div>
      </div>
    </div>
  );
};

export default Details;
