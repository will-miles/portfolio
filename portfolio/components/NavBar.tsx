import Link from 'next/link';
import styles from '../styles/NavBar.module.css'

const NavBar = () => {
    return (
        <div className={styles.navbar}>
            <Link href='/'><a className={styles.navbutton}>Home</a></Link>
            <Link href='/about'><a className={styles.navbutton}>About</a></Link>
            <Link href='/projects'><a className={styles.navbutton}>Projects</a></Link>
            <Link href='/contact'><a className={styles.navbutton}>Contact</a></Link>
        </div>
    );
}

export default NavBar;