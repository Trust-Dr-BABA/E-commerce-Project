import Image from "next/image";
import Link from 'next/link';
import styles from "./Header.module.css";

export default function Header(){
  return(
    <div className={styles.header}>
        <div className={styles.Snavbar}>
            <div>
                <span >Hotline 24/7</span>
                <span className="font-bold"> (025) 3888 25 16</span>
            </div>
            <div>
                <Link href="/" >Sell on Swoo</Link>
                <Link href="/" >Order Tracking</Link>
                <select>
                    <option value="usd">USD</option>
                </select>
                <select>
                    <option value="english">ENG</option>
                </select>
            </div>
        </div>
        <div className={styles.Mnavbar}>
            <Link href ="/" className={styles.logo}><Image src="/logo.png" alt="Logo"/></Link>
            <div className={styles.navSC}>
                <select>
                    <option value="1">HOMES</option>
                </select>
                <select>
                    <option value="page">PAGES</option>
                </select>
                <select>
                    <option value="products">PRODUCTS</option>
                </select>
                <Link href="/">CONTACT</Link>
            </div>
            <div className={styles.sidenav}>
            </div>
        </div>
        <div className={styles.search}>
            <div className={styles.searchBar}>
                <select>
                    <option value="category">All Categories</option>
                </select>
            </div>
            <span>FREE SHIPPING OVER $199</span>
            <span>30 DAYS MONEY BACK</span>
            <span>100% SECURE PAYMENT</span>
        </div>
    </div>
  );
}