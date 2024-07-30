import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/authSlice';
import { useRouter } from 'next/router';
import styles from '../styles/Header.module.css';

const Header = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem('token');
    router.push('/login');
  };

  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link href="/"><a>Home</a></Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/projects"><a>Projects</a></Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/testimonials"><a>Testimonials</a></Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/contact"><a>Contact</a></Link>
          </li>
          <li className={styles.navItem}>
            <button onClick={handleLogout} className={styles.logoutButton}>Logout</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;