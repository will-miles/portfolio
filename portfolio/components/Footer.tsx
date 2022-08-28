import styles from '../styles/Footer.module.css'

const Footer = () => {
    return (
        <div>
        <div className={styles.hr}></div>
        <footer className={styles.footer}>
            Copyright 2022
        </footer>
        </div>
    );
}

export default Footer;