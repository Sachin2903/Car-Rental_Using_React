import { Fragment ,useRef} from "react";
import styles from "../../../sass/subscribeStyle/subscribe.module.css"
export function Subscribe(){
    const inputsubref=useRef()
    return (
        <Fragment>
            <div className={styles.subBox}>
                <h2>Subscribe to get latest offers</h2>
                <div className={styles.subInputBtn}>
                    <input ref={inputsubref}placeholder="Email"className={styles.subInput}/>
                    <button onClick={()=>inputsubref.current.value=""}className={styles.subbtn}>Subscribe</button>
                </div>
            </div>

        </Fragment>
    )
}