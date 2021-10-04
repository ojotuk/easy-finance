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
  Button
} from "@mui/material";
import phone_model from "../../../../assets/images/phone-model.PNG"
import {connect,useDispatch} from "react-redux";
import ButtonLink from "../../../../components/buttons/ButtonLink"


function DevicesTable({display}) {
  console.log(display)
  return (
    <React.Fragment>
      <TableContainer component={Paper} elevation={0} className="paper">
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
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.description}</TableCell>
                <TableCell>{row.amount}</TableCell>
                <TableCell align="right">
                  <ButtonLink variant="outlined">Purchase</ButtonLink>
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