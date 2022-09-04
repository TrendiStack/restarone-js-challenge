import {
  Checkbox,
  Paper,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import TableBodyCell from "./table/TableBodyCell";
import TableHeadCell from "./table/TableHeadCell";
import data from "../../mock-data";

const DesktopFeed = ({ setUserNum }) => {
  return (
    <TableContainer className="hidden lg:block" component={Paper}>
      <Table size="small">
        <TableHead>
          <TableRow className="shadow-md">
            <TableCell>
              <Checkbox size="small" />
            </TableCell>
            <TableHeadCell
              text="First Name"
              indent={true}
              blueText={true}
              icon={true}
              rotate={true}
            />
            <TableHeadCell text="Company" icon={true} />
            <TableHeadCell text="Title" icon={true} />
            <TableHeadCell text="Email" icon={true} />
            <TableHeadCell text="Owned By" icon={true} />
            <TableHeadCell text="Street" />
            <TableHeadCell text="Created" icon={true} />
            <TableHeadCell text="Last Connected" icon={true} />
          </TableRow>
        </TableHead>
        {data.map((el) => (
          <TableBodyCell key={el.id} data={el} setUserNum={setUserNum} />
        ))}
      </Table>
    </TableContainer>
  );
};

export default DesktopFeed;
