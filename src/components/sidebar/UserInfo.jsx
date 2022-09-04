import { Avatar } from "@mui/material";
import { Close } from "@mui/icons-material";
import { NavContext } from "../../context/nav-context";
import { useContext } from "react";

const UserInfo = () => {
  const { handleNavToggle } = useContext(NavContext);
  return (
    <div className="flex justify-between mt-4 md:mt4 mr-3 ml-6">
      <div className="flex items-center gap-2">
        <Avatar className="w-[35px] h-[35px] text-base">TP</Avatar>
        <div>
          <p>Terel Phillips</p>
          <p>Netflix</p>
        </div>
      </div>
      <Close onClick={handleNavToggle} />
    </div>
  );
};

export default UserInfo;
