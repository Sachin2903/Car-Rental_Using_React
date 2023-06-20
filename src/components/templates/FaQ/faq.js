import { Fragment } from "react";
import styles from "../../../sass/faq/faq.module.css"
import { Faquestions } from "../../molecules/faquestion/faquestions";
import { useSelector } from "react-redux";
import rolls from "../../../images/rolls.png";
export function Faq(){
  
   const  faqContent=useSelector((state,action)=>{
    return state.faqState
   })

    return(
      <Fragment>
        <div className={styles.faqBox}>
          <img alt="Loading" className={styles.rollsImg} src={rolls}/>
            <h5 className={styles.faqTopText}>FAQ</h5>
            <h3 className={styles.faqTopText}>Frequently Asked Questions</h3>
             <p className={styles.faqTopText}>Frequently Asked Questions About The Car Rental Booking Process on Our Website Answer To Common Concers and Inquiries</p>
            
             {
                faqContent.map((e)=><Faquestions key={e.id} datadetailfaq={e}/>)
             }
        </div>

      </Fragment>
    )
}