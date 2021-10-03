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
import {connect} from "react-redux";
import ButtonLink from "../../../../components/buttons/ButtonLink"


function DevicesTable({display}) {
  
  return (
    <React.Fragment>
      <TableContainer component={Paper} elevation={0} className="paper" sx={{maxHeight:400}}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell>
                <span className="bold color-pry">{""}</span>
              </TableCell>
              <TableCell>
                <span className="bold color-pry">Name</span>
              </TableCell>
              <TableCell>
                <span className="bold color-pry">Description</span>
              </TableCell>
              <TableCell>
                <span className="bold color-pry">Total Amount</span>
              </TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {display?.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0},cursor:"pointer"  }}
              >
                <TableCell component="th" scope="row">
                  <img src={row.image} alt="phone-model" width="40px"/>
                </TableCell>
                <TableCell ><Typography variant="body2" color="primary">{row.name}</Typography></TableCell>
                <TableCell><Typography variant="body1" color="primary">{row.description}</Typography></TableCell>
                <TableCell><Typography color="primary">&#8358; {row.amount.toLocaleString()}</Typography></TableCell>
                <TableCell align="right">
                  <ButtonLink to={`/loans/device loan/device categories/mobile device loan?id=${row.id}`} variant="outlined">Purchase</ButtonLink>
                </TableCell>
              </TableRow>
            ))}
            {display.length === 0 && (
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
const mapStateToProps=(state)=>{
  return{
    display:state.device?.display
  }
}
export default connect(mapStateToProps)(DevicesTable)