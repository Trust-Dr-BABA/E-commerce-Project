import Image from "next/image";
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
                <a href="/" >Sell on Swoo</a>
                <a href="/" >Order Tracking</a>
                <select>
                    <option value="usd">USD</option>
                </select>
                <select>
                    <option value="english">ENG</option>
                </select>
            </div>
        </div>
        <div className={styles.Mnavbar}>
            <a href ="/" className={styles.logo}><img src="/logo.png" alt="Logo"/></a>
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
                <a href="/">CONTACT</a>
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