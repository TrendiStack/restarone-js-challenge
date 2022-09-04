import { Sort } from "@mui/icons-material";
import { TableCell } from "@mui/material";

const TableHeadCell = ({ indent, text, blueText, icon, rotate }) => {
  return (
    <TableCell
      className={`${indent && "2xl:indent-14"} ${blueText && "text-blue-900"}`}
      align="left"
    >
      <span className="cursor-pointer">
        {text}{" "}
        <span>
          {icon && <Sort className={`text-base ${rotate && "rotate-180"}`} />}
        </span>
      </span>
    </TableCell>
  );
};

export default TableHeadCell;
