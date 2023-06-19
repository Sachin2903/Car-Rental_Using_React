import { Fragment } from "react";
import styles from "../../../sass/questionAnswer/qa.module.css";
import {FiChevronDown,FiChevronUp} from "react-icons/fi"
export function Faquestions() {
    return (
        <Fragment>
            <div className={styles.faqMainBox}>
                <div className={false?`${styles.questionBox}`:`${styles.questionBox} ${styles.questionBoxFalse}`} >
                <p className={styles.bottomtext}>sachin</p>
                {
                    false?<FiChevronDown/>:<FiChevronUp/>
                }
                </div>
                {
                    false?null:<div className={styles.downExplainBox}>
                    <p className={styles.bottomtext}></p></div>

                } 

            </div>


        </Fragment>
    )
}