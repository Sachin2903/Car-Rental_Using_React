import React,{ Fragment } from "react";
import styles from "../../../sass/howItWorkStyle/howItWorks.module.css";
import location from "../../../images/location.jpg";
import calender from "../../../images/calender.jpg";
import done from "../../../images/done.jpg";
import { How } from "../../molecules/how/how";
export function HowItWorks(){
    const loca="Choose a appropriate nearest location from where you want to start you self car drive journey";
    const dat="Choose and Submit the Date of your pickup and drop up without any fail so that we can communicate easily";
    const don="After completion of all steps now you donot need to worry about your tansport an happy jouney"
   const a=[{img:location,title:"Choose A Location",message:loca},{img:calender,title:"Pick-Up Date",message:dat},{img:done,title:"Book A Car",message:don}]
    return (
        <Fragment>
            <h5>Plan your trip now</h5>
            <h2>Quik & easy car rental</h2>
            <div className={styles.howItWork} >
                {
                    a.map((e,i)=> <How key={i*10} dataDetail={e}/> )
                }

            </div>

        </Fragment>
    )
}