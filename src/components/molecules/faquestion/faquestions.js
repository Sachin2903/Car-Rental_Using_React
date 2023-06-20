import { Fragment} from "react";
import styles from "../../../sass/questionAnswer/qa.module.css";
import {FiChevronDown,FiChevronUp} from "react-icons/fi";
import { useDispatch } from "react-redux";
import { carRentalSlice } from "../../../Redux/slice/carRentalSlice";


export function Faquestions({datadetailfaq}) {
 
    const disFaq=useDispatch();
    function toogleFaqState(){
    disFaq(carRentalSlice.actions.toogle(datadetailfaq.id))
    }
    return (
        <Fragment>
            <div className={styles.faqMainBox}>
                <div onClick={toogleFaqState} className={(datadetailfaq.toogle)?`${styles.questionBox}`:`${styles.questionBox} ${styles.questionBoxFalse}`} >
                <p className={styles.bottomtext}>{datadetailfaq.question}</p>
                {
                    (datadetailfaq.toogle)?<FiChevronDown/>:<FiChevronUp/>
                }
                </div>
                {
                    (datadetailfaq.toogle)?null:<div className={styles.downExplainBox}>
                    <p className={styles.bottomtext}>{datadetailfaq.answer}</p></div>

                } 

            </div>


        </Fragment>
    )
}