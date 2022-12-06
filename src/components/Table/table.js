import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(date, profit, return_value, rate, modal, locking) {
  return { date, profit, return_value, rate, modal, locking };
}

const rows = [
  createData("27-Nov-22/03:33:37", "$5.04", "$25.30", "0.08%", "$3.00", 8),
  createData("27-Nov-22/03:33:37", "$5.04", "$25.30", "0.08%", "$3.00", 8),
  createData("27-Nov-22/03:33:37", "$5.04", "$25.30", "0.08%", "$3.00", 8),
  createData("27-Nov-22/03:33:37", "$5.04", "$25.30", "0.08%", "$3.00", 8),
  createData("27-Nov-22/03:33:37", "$5.04", "$25.30", "0.08%", "$3.00", 8),
];

const CustomizedTables = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Date Time</StyledTableCell>
            <StyledTableCell align="center">Profit</StyledTableCell>
            <StyledTableCell align="center">Return</StyledTableCell>
            <StyledTableCell align="center">Profit (%)</StyledTableCell>
            <StyledTableCell align="center">Modal</StyledTableCell>
            <StyledTableCell align="center">Locking</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell component="th" scope="row">
                {row.date}
              </StyledTableCell>
              <StyledTableCell align="center">{row.profit}</StyledTableCell>
              <StyledTableCell align="center">
                {row.return_value}
              </StyledTableCell>
              <StyledTableCell align="center">{row.rate}</StyledTableCell>
              <StyledTableCell align="center">{row.modal}</StyledTableCell>
              <StyledTableCell align="center">{row.locking}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default CustomizedTables;
