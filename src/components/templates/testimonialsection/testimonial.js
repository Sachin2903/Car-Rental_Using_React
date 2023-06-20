import { Fragment } from "react";
import styles from "../../../sass/testimonialStyle/test.module.css";
import boy from "../../../images/test/boy.jpg";
import men from "../../../images/test/men.jpg";
import uncle from "../../../images/test/uncle.jpg";
import {ImQuotesLeft} from "react-icons/im"
export function Testimonial() {
    return (
        <Fragment>
            <div className={styles.testMainBox}>
                <div className={styles.contentBox}>
                    <ImQuotesLeft className={styles.quotesIcons}/>
                    <p className={styles.contentText}>
                    </p>
                    <h5></h5>
                </div>
                <div className={styles.imgBox}>
                    <img className={styles.testLogo}alt="loading" src={boy} />
                    <img className={styles.testLogo}alt="loading" src={men} />
                    <img className={styles.testLogo}alt="loading" src={uncle} />
                </div>

            </div>

        </Fragment>
    )
}