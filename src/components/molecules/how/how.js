import { Fragment } from "react";
import styles from "../../../sass/howMolecule/how.module.css"
export function How({ dataDetail }) {
    return (
        <Fragment>
            <div className={styles.howBox}>
                <img className={styles.image} src={dataDetail.img} alt="loading" />


                <h4>{dataDetail.title}</h4>
                <p className={styles.howText}>{dataDetail.message}</p>
            </div>

        </Fragment>
    )
}