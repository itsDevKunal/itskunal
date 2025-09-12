'use client';
import Link from 'next/link';
import styles from './navbar.module.css';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  const router = useRouter();
  useEffect(() => {
    // Scroll to the target with an offset when the page loads
    if (window.location.hash) {
      const targetElement = document.querySelector(window.location.hash);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 100, // Adjust offset value here
          behavior: 'smooth',
        });
      }
    }
  }, []);

  const handleLinkClick = (e, target) => {
    e.preventDefault();
    const targetElement = document.querySelector(target);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 40,
        behavior: 'smooth',
      });
    } else {
      router.push('/');
    }
  };

  return (
    <>
      <div className={`${styles.background} ${toggle ? styles.backgroundOpen : ''}`} onClick={() => setToggle(false)}></div>
      <div className={styles.hamburger} onClick={() => setToggle(!toggle)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      <nav className={`${styles.navbar} ${toggle ? styles.navbarOpen : ''}`}>
        <img className={styles.mypic} src="/pp.png" alt="mypic" />
        <ul>
          <li><Link href='/'>Home</Link></li>
          <li><a onClick={(e) => handleLinkClick(e, '#about')}>About</a></li>
          <li><a onClick={(e) => handleLinkClick(e, '#skills')}>Skills</a></li>
          <li><Link href='/contact'>Contact</Link></li>
        </ul>
      </nav>
    </>
  );
}