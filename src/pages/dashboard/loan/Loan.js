import React from "react";
import Layout from "../../../components/templates";
import ActiveLoans from "./components/ActiveLoanTable";
import ExploreItemCard from "./components/ExploreItemCard";
import device from "../../../assets/images/device-loan.PNG"
import {Container, Grid} from "@mui/material"

const data = [
  {
    image:device,
    category:"Device Loan",
    caption:"caption",
    route:"/Device Loan",
    btnText:"Explore Available Devices"
  },
  {
    image:device,
    category:"Device Loan",
    caption:"caption",
    route:"/loans/Device Loan",
    btnText:"Explore Available Devices"
  },
  {
    image:device,
    category:"Device Loan",
    caption:"caption",
    route:"/loans/device loan",
    btnText:"Explore Available Devices"
  },
  {
    image:device,
    category:"Device Loan",
    caption:"caption",
    route:"/loans/device loan",
    btnText:"Explore Available Devices"
  },
  {
    image:device,
    category:"Device Loan",
    caption:"From N 50,000 to N 500,000",
    route:"/loans/device loan/device categories",
    btnText:"Explore Available Devices"
  },
]
export default function index() {
  return (
      <Layout>
        <Container sx={{ml:0}}>
        <h3 className="color-pry bold-600" style={{ lineHeight: "96px" }}>
          Loan
        </h3>
        <ActiveLoans />
        <Grid container spacing={4} sx={{mt:4}}>
          {data.map((item,index)=>
          <Grid item md={6} lg={3} key={index}>
          <ExploreItemCard {...item}/>
          </Grid>)}
        </Grid>
        </Container>
      </Layout>
  );
}
