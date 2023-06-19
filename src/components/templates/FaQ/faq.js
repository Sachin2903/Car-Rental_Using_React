import { Fragment } from "react";
import styles from "../../../sass/faq/faq.module.css"
import { Faquestions } from "../../molecules/faquestion/faquestions";
export function Faq(){
   const  faqContent=[{}];
    return(
      <Fragment>
        <div className={styles.faqBox}>
            <h5 className={styles.faqTopText}>FAQ</h5>
            <h3 className={styles.faqTopText}>Frequently Asked Questions</h3>
             <p className={styles.faqTopText}>Frequently Asked Questions About The Car Rental Booking Process on Our Website Answer To Common Concers and Inquiries</p>
            
             {
                faqContent.map((e)=><Faquestions/>)
             }
        </div>

      </Fragment>
    )
}