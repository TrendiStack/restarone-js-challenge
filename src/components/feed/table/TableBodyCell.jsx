import { Avatar, TableBody, TableCell, TableRow } from "@mui/material";
import { useContext } from "react";
import { DetailsContext } from "../../../context/details-context";

const TableBodyCell = ({ data, setUserNum }) => {
  const { handleDetailsToggle } = useContext(DetailsContext);
  const {
    id,
    first_name,
    company,
    title,
    email,
    owner,
    street,
    created,
    last_connected,
  } = data;
  return (
    <TableBody
      onClick={() => {
        handleDetailsToggle();
        setUserNum((prev) => (prev = id - 1));
      }}
      className="cursor-pointer"
    >
      <TableRow>
        <TableCell></TableCell>
        <TableCell className="text-xs">
          <div className="flex items-center gap-4 py-1 ml-[-45px]">
            <Avatar className="w-7 h-7 text-[0.65rem] font-semibold bg-slate-200 text-slate-800 ">
              {first_name.split(" ")[0].split("")[0] +
                first_name.split(" ")[1].split("")[0]}
            </Avatar>
            {first_name}
          </div>
        </TableCell>
        <TableCell
          className="text-xs text-blue-900 border-l-[1px]"
          align="left"
        >
          {company}
        </TableCell>
        <TableCell className="text-xs" align="left">
          {title}
        </TableCell>
        <TableCell className="text-xs text-blue-900" align="left">
          {email}
        </TableCell>
        <TableCell className="text-xs text-blue-900" align="left">
          {owner}
        </TableCell>
        <TableCell className="text-xs" align="left">
          {street}
        </TableCell>
        <TableCell className="text-xs" align="left">
          {created}
        </TableCell>
        <TableCell className="text-xs" align="left">
          {last_connected}
        </TableCell>
      </TableRow>
    </TableBody>
  );
};

export default TableBodyCell;
