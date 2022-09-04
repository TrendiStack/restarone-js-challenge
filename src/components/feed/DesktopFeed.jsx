import {
  Checkbox,
  Paper,
  Table,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import TableBodyCell from "./table/TableBodyCell";
import TableHeadCell from "./table/TableHeadCell";
import data from "../../mock-data";
import { useContext } from "react";
import { DetailsContext } from "../../context/details-context";

const DesktopFeed = ({ setUserNum }) => {
  const { handleDetailsToggle } = useContext(DetailsContext);
  return (
    <TableContainer
      onClick={handleDetailsToggle}
      className="hidden lg:block"
      component={Paper}
    >
      <Table size="small" aria-label="a dense table">
        <TableHead>
          <Checkbox size="small" className="absolute top-[110.5px]" />
          <TableRow className="shadow-md">
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
