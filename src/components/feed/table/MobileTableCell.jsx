import { TableCell, Typography } from "@mui/material";
const MobileTableCell = ({ cell1, cell2 }) => {
  return (
    <>
      <TableCell>
        <Typography variant="h5" component="h2">
          {cell1}
        </Typography>
      </TableCell>
      <TableCell>
        <Typography variant="h6" component="h2">
          {cell2}
        </Typography>
      </TableCell>
    </>
  );
};

export default MobileTableCell;
