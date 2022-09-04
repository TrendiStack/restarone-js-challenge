import { Sort } from "@mui/icons-material";
import { TableCell } from "@mui/material";
const TableHeadCell = ({ indent, text, blueText, icon, rotate }) => {
  return (
    <TableCell
      className={`${indent && ""} ${
        blueText && "text-blue-900"
      } text-[0.70rem] 2xl:text-base `}
      align="left"
    >
      {text}
      {icon && <Sort className={`text-base ${rotate && "rotate-180"}`} />}
    </TableCell>
  );
};

export default TableHeadCell;
