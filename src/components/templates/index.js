import React from 'react'
import SideBar from './components/SideBar'
import ToolBar from './components/ToolBar'
import ChildComponent from './components/ChildComponent'
import styles from "./index.module.css"



export default function index({children}) {
    return (
        <div className={styles.layout}>
            <SideBar />
            <div className={styles.main}>
                <ToolBar />
                <ChildComponent child={children}/>
            </div>
        </div>
    )
}
