import React from 'react'
import styles from "../index.module.css"
import {Avatar} from "@mui/material"


export default function ToolBar() {
    return (
        <div className={styles["tool-bar"]}>
            <ul className={styles["tool-bar-nav"]}>
                <li className={styles["tool-bar-nav-item"]}>
                <i className="fa fa-volume-control-phone mr-3"></i><span>Support</span>
                </li>
                <li className={styles["tool-bar-nav-item"] + " " + styles["drop-down"]}>
                   <div className="d-flex align-items-center"> <Avatar/>{" "}<span>Ayomide</span><i className="fa fa-angle-down"></i></div>
                   <ul>
                       <li className="mb-2">Profile</li>
                       <li>log Out</li>
                   </ul>
                </li>

                </ul>
        </div>
    )
}
