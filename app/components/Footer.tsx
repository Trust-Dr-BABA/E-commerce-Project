import Image from "next/image";
import Link from 'next/link';
import styles from "./Footer.module.css";

export default function Footer(){
  return(
    <div className={styles.footer}>
        <div className="container">
            <div className={styles.bottom}>
                <span>© 2024 Shawonetc3 . All Rights Reserved</span>
                <div>
                    <Image src="/pay1.png" alt="pay1" width={50} height={30} className="inline" />
                    <Image src="/pay2.png" alt="pay2" width={50} height={30} className="inline" />
                    <Image src="/pay3.png" alt="pay3" width={50} height={30} className="inline" />
                    <Image src="/pay4.png" alt="pay4" width={50} height={30} className="inline" />
                    <Image src="/pay5.png" alt="pay5" width={50} height={30} className="inline" />
                </div>
                <Link href="/" >Mobile Site</Link>
            </div>

        </div>
    </div>
  );
}