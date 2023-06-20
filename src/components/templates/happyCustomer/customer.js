import { Fragment, useState } from "react";
import styles from "./customer.module.css";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
export function HappyCustomer() {
    const [count, setCount] = useState(false);
    return (
        <Fragment>
            <ScrollTrigger onEnter={()=>setCount(true)} onExit={()=>setCount(false)}>
            <div className={styles.countDounnBox}>
                
                <div>
                    {
                        count && <CountUp className={styles.count} start={0} end={4000} duration={5} delay={0} />
                    }

                    <h3>Successfull Ride</h3>
                </div>
                <div>
                    {
                        count && <CountUp className={styles.count} start={0} end={5000} duration={5} delay={0} />
                    }

                    <h3>Happy Customers</h3>
                </div>
                <div>
                    {
                        count && <CountUp className={styles.count} start={0} end={52} duration={5} delay={0} />
                    }

                    <h3>Cities</h3>
                </div>
               
            </div>
            </ScrollTrigger>
        </Fragment>
    )
}