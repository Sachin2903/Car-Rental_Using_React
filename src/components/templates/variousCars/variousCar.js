import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../../../sass/carsStyle/car.module.css";
import { carModelSlice } from "../../../Redux/slice/carModel/carModelDetails";

export function VariousCars() {
    const dis = useDispatch()
    const carDeatils = useSelector((state, action) => {
        return state.carModelToogle
    })
    function changeDetailToogleFun(idd) {
        dis(carModelSlice.actions.toogleDetail(idd))
    }

    return (
        <Fragment>
            <div className={styles.carMainBox}>
                <h4>Vehicle Models</h4>
                <h2>Our Rental Cars</h2>
                <p>Choose from a variety of our amazing vehicles to rent for your next adventure or business trip</p>
                <div className={styles.carModelBox}>

                    <div className={styles.CarNames}>
                        <p onClick={() => changeDetailToogleFun(0)} className={carDeatils[1][0] ? styles.carsOnlyName : `${styles.carsOnlyName} ${styles.carsOnlyNameFalse}`}>Alto 800</p>
                        <p onClick={() => changeDetailToogleFun(1)} className={carDeatils[1][1] ? styles.carsOnlyName : `${styles.carsOnlyName} ${styles.carsOnlyNameFalse}`}>Ertiga</p>
                        <p onClick={() => changeDetailToogleFun(2)} className={carDeatils[1][2] ? styles.carsOnlyName : `${styles.carsOnlyName} ${styles.carsOnlyNameFalse}`}>Scorpio</p>
                        <p onClick={() => changeDetailToogleFun(3)} className={carDeatils[1][3] ? styles.carsOnlyName : `${styles.carsOnlyName} ${styles.carsOnlyNameFalse}`}>Fortuner</p>
                        <p onClick={() => changeDetailToogleFun(4)} className={carDeatils[1][4] ? styles.carsOnlyName : `${styles.carsOnlyName} ${styles.carsOnlyNameFalse}`}>Swift</p>
                        <p onClick={() => changeDetailToogleFun(5)} className={carDeatils[1][5] ? styles.carsOnlyName : `${styles.carsOnlyName} ${styles.carsOnlyNameFalse}`}>Kia</p>
                    </div>
                    <img src={carDeatils[0].srcc} alt="loading" className={styles.carsImg} />
                    <div className={styles.carsDetails}>
                        <table className={styles.contentTable}>
                            <th className={styles.tableHead}>Rs {carDeatils[0].Rate} /day</th>
                            <tr>
                                <td className={styles.subTable}>Model</td>
                                <td className={styles.subTable}>{carDeatils[0].Model}</td>
                            </tr>
                            <tr>
                                <td className={styles.subTable}>Year</td>
                                <td className={styles.subTable}>{carDeatils[0].Year}</td>
                            </tr>
                            <tr>
                                <td className={styles.subTable}>Doors</td>
                                <td className={styles.subTable}>{carDeatils[0].Doors}</td>
                            </tr>
                            <tr>
                                <td className={styles.subTable}>AC</td>
                                <td className={styles.subTable}>{carDeatils[0].Ac}</td>
                            </tr>
                            <tr>
                                <td className={styles.subTable}>Transmission</td>
                                <td className={styles.subTable}>{carDeatils[0].Transmission}</td>
                            </tr>
                            <tr>
                                <td className={styles.subTable}>Fuel</td>
                                <td className={styles.subTable}>{carDeatils[0].Fuel}</td>
                            </tr>


                        </table>
                        <button className={styles.tableBtn}>RESERVE NOW</button>

                    </div>
                </div>

            </div>

        </Fragment>
    )
}