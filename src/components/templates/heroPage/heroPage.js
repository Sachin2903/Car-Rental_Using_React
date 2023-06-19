import React, { Fragment, useState, useRef } from "react";
import styles from "../../../sass/heroPageStyle/heroPage.module.css";
import scropio from "../../../images/scorpio.png"
import play from "../../../images/playstore.png";
import appstore from "../../../images/appstore.png";

export function HeroPage() {
    return (
        <Fragment>
            <div className={styles.heroPageBox}>
                <div className={styles.photoBox}>
                    <img className={styles.heroImage} alt="Loading" src={scropio} />
                </div>
                <div className={styles.scheduleBox}>
                    <p className={styles.lookTo}><span className={styles.look}>Looking</span> to</p>
                    <p className={styles.lookTo}>rent a car</p>
                    <p className={styles.lookTosave}>Save <span className={styles.big}>BIG</span> with car rental</p>
                    <span>
                        <img className={styles.storeImage} alt="Loading" src={play} />
                        <img className={styles.storeImage} alt="Loading" src={appstore} />
                    </span>
                    <div className={styles.schedulestyle}>
                        <div className={styles.schedule}>
                            <div>
                                <p className={styles.schText}>Location</p>
                                <input placeholder="Search Places" className={styles.location}/>
                            </div>
                            <div>
                                <p className={styles.schText}>Pick-Up Date</p>
                                <input className={styles.dateInput}  type="date"/>
                            </div>
                            <div>
                                <p className={styles.schText}>Return Date</p>
                                <input className={styles.dateInput} type="date" />
                            </div>
                            <button className={styles.submitbtn}>Submit</button>

                        </div>
                    </div>

                </div>

            </div>

        </Fragment>
    )
}