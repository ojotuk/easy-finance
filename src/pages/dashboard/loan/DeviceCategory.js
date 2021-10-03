import React from "react";
import { Paper } from "@mui/material";
import phone from "../../../assets/images/Mobile.svg";
import accessories from "../../../assets/images/Accessories.svg";
import appliances from "../../../assets/images/Appliances.svg";
import gaming from "../../../assets/images/Gaming.svg";
import classNames from "classnames";
// import phone from "../../../assets/images/phone.png";
import DevicesTable from "./components/DevicesTable";
import { showCategory, showDeviceTab } from "../../../redux/actions/device";
import { connect, useDispatch } from "react-redux";
import { Container } from "@mui/material";
import Layout from "../../../components/templates";
import { useHistory } from "react-router";
const category = [
  {
    image: phone,
    type: "Mobile Device",
    category: "mobile",
  },
  {
    image: accessories,
    type: "Mobile Device Accessories",
    category: "accessories",
  },
  {
    image: phone,
    type: "Tablets and Laptops",
    category: "tablets",
  },
  {
    image: appliances,
    type: "Home Appliances",
    category: "appliances",
  },
  {
    image: gaming,
    type: "Gaming Consoles",
    category: "gaming",
  },
];
function Index({ tab }) {
  const dispatch = useDispatch();
  const [show,setShow] = React.useState(0);
  const history=useHistory();
  const indicatorClass = (index) => {
    return classNames({
      "indicator position-absolute": true,
      "indicator-hide": show - 1 !== index,
    });
  };
  React.useEffect(()=>{
    setShow(tab)
  },[tab])
  return (
    <Layout>
      <Container sx={{ pl: 0, ml: 0 }}>
        <h6 className="color-pry bold-600" style={{ lineHeight: "96px" }}>
          {history.location.pathname}
        </h6>
        <Paper sx={{ p: 4 }} elevation={0} className="paper">
          <h6 className="bold-600 color-pry">Select Device Category</h6>
          <div className="d-flex justify-content-between">
            {category.map((item, index) => (
              <div
                md={6}
                lg={2}
                key={index}
                className="c-pointer position-relative"
                onClick={() => {
                  dispatch(showDeviceTab(index + 1));
                  dispatch(showCategory(item.category));
                }}
              >
                <div>
                  <img src={item.image} />
                  <h6 className="text-center color-pry" style={{lineHeight:"48px"}}>{item.type}</h6>
                </div>
                <div className={indicatorClass(index)}></div>
              </div>
            ))}
          </div>
        </Paper>
        <div className="spacer" />
        {tab ? <DevicesTable {...tab} /> : null}
      </Container>
    </Layout>
  );
}

const mapStateToProps = (state) => {
  return {
    tab: state.device?.tab,
  };
};
export default connect(mapStateToProps)(Index);
