import { TableBody, TableCell, TableRow } from "@mui/material";

const TableBodyCell = ({ data, setUserNum }) => {
  const {
    id,
    first_name,
    company,
    title,
    email,
    phone,
    owner,
    street,
    created,
    last_connected,
  } = data;
  return (
    <TableBody
      onClick={() => setUserNum((prev) => (prev = id - 1))}
      className="cursor-pointer"
    >
      <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
        <TableCell
          className="2xl:indent-14 py-2 text-xs "
          component="th"
          scope="row"
        >
          {first_name}
        </TableCell>
        <TableCell className="text-xs text-blue-900" align="left">
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
