import { Fragment } from "react";
import styles from "../../../sass/lastPart/last.module.css";
import {FaRegCopyright} from "react-icons/fa";
import {BsFacebook,BsGithub} from "react-icons/bs";
import {RiInstagramFill} from "react-icons/ri"
export function Last(){
    return (
        <Fragment>
            <div className={styles.lastBox}>
               <p>Developed By Sachin Chaturvedi</p>
               <p><FaRegCopyright/>All Right Reserved</p>
              <span>
                <BsFacebook className={styles.lastIcons}/>
                <RiInstagramFill className={styles.lastIcons}/>
                <BsGithub className={styles.lastIcons}/>
              </span>
            </div>
        </Fragment>
    )
}