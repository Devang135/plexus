import Link from "next/link";
import Image from 'next/image';
import styles from './navbar.module.css';

const Navbar = () =>{
    return (
        <nav className={styles.navbar}>
            <div className={styles.navContent}>
                 
                <Link className={styles.LogoLink} href="/"> 
                <Image src ="/logo.svg" alt="Logo" width={144} height={41} className={styles.logo} />
                </Link>
                <Link href="/movies" className={styles.navLink} >Movies</Link>
                <Link href="/theaters" className={styles.navLink}>Theaters</Link>
                <Link href="/movie-news" className={styles.navLink}>Movie News</Link>
                <Link href="/joinnow" className={styles.navLink}>Sign/Login</Link>
                 
            </div>
        </nav>
    );
};

export default Navbar;








