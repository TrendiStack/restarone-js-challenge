import {
  Accordion,
  AccordionDetails,
  Typography,
  AccordionSummary,
  Table,
  TableContainer,
  TableRow,
  TableCell,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Paper from "@mui/material/Paper";
import MobileTableCell from "./table/MobileTableCell";

const MobileFeedData = ({ data }) => {
  const {
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
    <>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h5">{first_name}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <MobileTableCell cell1="Company" cell2={company} />
              </TableRow>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              ></TableRow>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              ></TableRow>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <MobileTableCell cell1="Title" cell2={title} />
              </TableRow>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <MobileTableCell cell1="Email" cell2={email} />
              </TableRow>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <MobileTableCell cell1="Phone" cell2={phone} />
              </TableRow>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <MobileTableCell cell1="Owned By" cell2={owner} />
              </TableRow>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <MobileTableCell cell1="Street" cell2={street} />
              </TableRow>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <MobileTableCell cell1="Created" cell2={created} />
              </TableRow>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <MobileTableCell
                  cell1="Last Connected"
                  cell2={last_connected}
                />
              </TableRow>
            </Table>
          </TableContainer>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default MobileFeedData;
