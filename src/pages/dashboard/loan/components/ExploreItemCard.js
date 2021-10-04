import React from 'react'
import fone from "../../../../assets/images/device-loan.PNG"
import ButtonLink from '../../../../components/buttons/ButtonLink'
import styles from "../index.module.css"



export default function ExploreItemCard({route,btnText,image,caption,category}) {

    return (
        <div className={styles.card}>
            <img src={image} />
            <h6>{category}</h6>
            <p>{caption}</p>
            <ButtonLink variant="contained" to={route}>{btnText}</ButtonLink>
        </div>
    )
}
