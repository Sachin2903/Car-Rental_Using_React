import React,{Fragment,useState,useRef} from "react";
import styles from "../../../sass/navbarStyle/navbar.module.css";
import logo from "../../../images/logo.jpg";
import {TiThMenu} from "react-icons/ti";
import {ImCross} from "react-icons/im"
export function Navbar(){
    const [toggleMenu,setToggleMenu]=useState(true);
    const toggleRef=useRef();
    function toggleFun(){
        setToggleMenu(!toggleMenu)
        toggleRef.current.style.display="block";
        toggleRef.current.style.height="99.9vh";
    }
    function toggleFunClose(){
        setToggleMenu(!toggleMenu)
        toggleRef.current.style.display="none";

    }
    return(
        <Fragment>
            <div id="home" className={styles.navbarBox}>
               <img className={styles.navLogo}alt="Loading" src={logo}/>
               <ul ref={toggleRef} className={styles.navList}>
                <li><a href="#home">Home</a></li>
                <li><a href="#home">Ride</a></li>
                <li><a href="#home">Services</a></li>
                <li><a href="#home">About</a></li>
                <li><a href="#home">Review</a></li>
                </ul>
                {
                    toggleMenu?<TiThMenu onClick={toggleFun} className={styles.menu}/>:<ImCross className={styles.menu} onClick={toggleFunClose} />
                } 




                <span >
                    <button className={styles.signUp}>Sign Up</button>
                    <button className={styles.signIn}>Sign In</button>
                </span>
                
                
            </div>
        </Fragment>
    )
}