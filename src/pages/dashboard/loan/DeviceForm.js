import React from "react";
import { Button, Divider, Paper } from "@mui/material";
import Layout from "../../../components/templates";
import { connect } from "react-redux";
import { Container } from "@mui/material";
import { useHistory } from "react-router";

function DeviceLoanForm({ products }) {
  const [data, setData] = React.useState(null);
  const history = useHistory();
  const id = history.location.search?.split("=")[1];
  React.useEffect(() => {
    if(id){
      const item = products.find((el) => `${el.id}` === `${id}`);
      setData(item);
    }
  }, [id,products]);
  return (
    <Layout>
      {data ? (
        <Container sx={{ pl: 0, ml: 0 }}>
          <h6 className="color-pry bold-600" style={{ lineHeight: "96px" }}>
          {history.location.pathname}  
          </h6>
          <div className="mb-4">
            <Button variant="outlined" style={{textTransform:"none"}} onClick={() => history.goBack()}>
              Go Back
            </Button>
          </div>
          <Paper sx={{ p: 4 }} elevation={0} className="paper">
            <h6 className="bold-600 color-pry">Mobile Device Loan - {data.name}</h6>
            <Divider />
            <div className="mt-4">
              <p>Render here the form of CowriesMFB for the loan</p>
            </div>
            <div className="spacer" />
            <Button variant="contained" color="secondary" className="text-white" disableElevation style={{textTransform:"none",marginRight:"30px"}}>Submit</Button>
            <Button variant="outlined" style={{textTransform:"none"}}>Reset</Button>
          </Paper>
        </Container>
      ) : null}
    </Layout>
  );
}
const mapStateToProps = (state) => {
  return {
    products: state.device?.products,
  };
};
export default connect(mapStateToProps)(DeviceLoanForm);
