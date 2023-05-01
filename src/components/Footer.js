import React from 'react'
import styles from "../css/Footer.module.css"

class Footer extends React.Component {
  render(){ 
    return (
      <footer className={styles.footer}>
      <div className={styles['footer-menu']}>
        <div className={styles['footer-menu-item']}>Contact Us</div>
        <div className={styles['footer-menu-item']}>Private Policy</div>
        <div className={styles['footer-menu-item']}>Terms of Service</div>
      </div>
      <div className={styles['footer-menu-item']}>© 2023, keyboards shop</div>
    </footer>
    );
  }
 
}
export default Footer;