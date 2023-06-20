import { Fragment, useState } from "react";
import styles from "../../../sass/testimonialStyle/test.module.css";
import boy from "../../../images/test/boy.jpg";
import men from "../../../images/test/men.jpg";
import uncle from "../../../images/test/uncle.jpg";
import { ImQuotesLeft } from "react-icons/im"
export function Testimonial() {
    const [client, setClient] = useState(["Before arriving,they were really helpful via email with the doubts and questions.When we arrived, they were already waiting for us.Gave us (new and clean) car. Everything was great. Best choice", "Mr. Ram tiwari", [true, true, false]])
    const testDummy = ["We were very satisfied with the organization of picking up the car at the airport and dropping it off .There were no problems and the car served our purpose. I definitely recommend it!",
        "Very nice and competent contact person, tries very hard to organize everything to the satisfaction of the customer! Very friendly communication English! Many thanks for everything",
        "Before arriving,they were really helpful via email with the doubts and questions.When we arrived,they were already waiting for us.Gave us (new and clean) car. Everything was great. Best choice"];
    const clientName = ["Mr. Rohan Gour", "Mr. Amit Sharma", "Mr. Ram tiwari"];
    function changeClient(id) {
        let a = []
        if (id === 0) {
            a = [false, true, true];
        } else if (id === 1) {
            a = [true, false, true];
        } else {
            a = [true, true, false];
        }
        setClient([testDummy[id], clientName[id], a])

    }

    return (
        <Fragment>
            <div className={styles.testMainBox}>
                <h6>REVIEWS</h6>
                <h2>Whats Our Customer Say</h2>

                <div className={styles.contentBox}>
                    <ImQuotesLeft className={styles.quotesIcons} />
                    <p className={styles.contentText}>{client[0]}</p>
                    <h5>{client[1]}</h5>
                </div>
                <div className={styles.imgBox}>
                    <img onClick={() => changeClient(0)} className={client[2][0] ? `${styles.testLogo}` : `${styles.testLogo} ${styles.falsetestlogo}`} alt="loading" src={boy} />
                    <img onClick={() => changeClient(1)} className={client[2][1] ? `${styles.testLogo}` : `${styles.testLogo} ${styles.falsetestlogo}`} alt="loading" src={men} />
                    <img onClick={() => changeClient(2)} className={client[2][2] ? `${styles.testLogo}` : `${styles.testLogo} ${styles.falsetestlogo}`} alt="loading" src={uncle} />
                </div>

            </div>

        </Fragment>
    )
}