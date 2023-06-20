import { Fragment } from "react";
import styles from "./customer.module.css";
export function HappyCustomer(){
    return (
        <Fragment>
            <div className={styles.countDounnBox}>
                <div>
                    <h3>4000+</h3>
                    <h3>Successfull Ride</h3>
                </div>
                <div>
                    <h3>5000+</h3>
                    <h3>Happy Customers</h3>
                </div>
                <div>
                    <h3>52+</h3>
                    <h3>Cities</h3>
                </div>

            </div>
        </Fragment>
    )
}