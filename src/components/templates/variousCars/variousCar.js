import { Fragment } from "react"
import styles from "../../../sass/carsStyle/car.module.css";
export function VariousCars() {
    return (
        <Fragment>
            <div className={styles.carMainBox}>
                <div className={styles.carModelBox}>
                    <div className={styles.CarNames}>
                        <p className={styles.carsOnlyName}>Alto 800</p>
                        <p className={styles.carsOnlyName}>Maruti Suzuki</p>
                        <p className={styles.carsOnlyName}>Scorpio</p>
                        <p className={styles.carsOnlyName}>Fortuner</p>
                        <p className={styles.carsOnlyName}>Swift</p>
                        <p className={styles.carsOnlyName}>Kia</p>








                    </div>
                    <img className={styles.carsImg} />
                    <div className={styles.carsDetails}>

                    </div>
                </div>

            </div>

        </Fragment>
    )
}