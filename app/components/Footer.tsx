import Image from "next/image";
import styles from "./Footer.module.css";

export default function Footer(){
  return(
    <div className={styles.footer}>
        <div className="container">
            <div className={styles.bottom}>
                <span>© 2024 Shawonetc3 . All Rights Reserved</span>
                <div>
                    <img src="/pay1.png" className="inline"/>
                    <img src="/pay2.png" className="inline"/>
                    <img src="/pay3.png" className="inline"/>
                    <img src="/pay4.png" className="inline"/>
                    <img src="/pay5.png" className="inline"/>
                </div>
                <a href="/" >Mobile Site</a>
            </div>

        </div>
    </div>
  );
}