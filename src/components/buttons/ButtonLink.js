import React from "react";
import { Link } from "react-router-dom";
import styles from "./button.module.css"
import { Button } from "@mui/material";

export default function ButtonLink({ to, children , className, variant}) {
  return (
    <>
      {!to ? <Button  variant={variant} onClick={()=>console.log("hey")} className={styles.btn +" "+ className}>{children}</Button> :
      <Link to={to}>
        <Button variant={variant} className={styles.btn +" "+ className}>{children}</Button>
      </Link>}
    </>
  );
}
