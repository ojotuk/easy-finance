import React from "react";
import {HashRouter} from "react-router-dom"
import Layout from "../../../components/templates";
import ActiveLoans from "./components/ActiveLoanTable";
import ExploreItemCard from "./components/ExploreItemCard";
import device from "../../../assets/images/device-loan.PNG"
import {Grid} from "@mui/material"

const data = [
  {
    image:device,
    category:"Device Loan",
    caption:"caption",
    route:"/",
    btnText:"Explore Available Devices"
  },
  {
    image:device,
    category:"Device Loan",
    caption:"caption",
    route:"/",
    btnText:"Explore Available Devices"
  },
  {
    image:device,
    category:"Device Loan",
    caption:"caption",
    route:"/",
    btnText:"Explore Available Devices"
  },
  {
    image:device,
    category:"Device Loan",
    caption:"caption",
    route:"/",
    btnText:"Explore Available Devices"
  },
  {
    image:device,
    category:"Device Loan",
    caption:"caption",
    route:"/device category",
    btnText:"Explore Available Devices"
  },
]
export default function index() {
  return (
      <div>
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
      </div>
  );
}
