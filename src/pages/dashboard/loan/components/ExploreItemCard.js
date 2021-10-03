import React from 'react'
import ButtonLink from '../../../../components/buttons/ButtonLink'
import styles from "../index.module.css"



export default function ExploreItemCard({route,btnText,image,caption,category}) {

    return (
        <div className={styles.card}>
            <img src={image} alt="icon-device" />
            <h6 className="bold-600 color-pry-dark">{category}</h6>
            <p className="color-pry-dark">{caption}</p>
            <ButtonLink variant="contained" to={route}>{btnText}</ButtonLink>
        </div>
    )
}
