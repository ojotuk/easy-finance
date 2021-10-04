import * as React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";

const rows = [];

export default function ActiveLoanTable() {
  return (
    <React.Fragment>
      <TableContainer component={Paper} elevation={0} className="paper">
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell sx={{ borderBottom: 0 }}>
                <Typography variant="h5" color="primary">
                  My Active Loans
                </Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <span className="bold color-pry">Reference Number</span>
              </TableCell>
              <TableCell>
                <span className="bold color-pry">Total Amount</span>
              </TableCell>
              <TableCell>
                <span className="bold color-pry">Date Applied</span>
              </TableCell>
              <TableCell>
                <span className="bold color-pry">Date Disbursed</span>
              </TableCell>
              <TableCell>
                <span className="bold color-pry">Repayment Date</span>
              </TableCell>
              <TableCell align="right">
              <span className="bold color-pry">Action</span>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
              </TableRow>
            ))}
            {rows.length === 0 && (
              <TableCell colSpan={12}>
                <Typography className="text-center">No result found</Typography>
              </TableCell>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </React.Fragment>
  );
}
