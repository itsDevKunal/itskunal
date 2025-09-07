'use client';
import Link from 'next/link';
import styles from './navbar.module.css';
import { useEffect } from 'react';

export default function Navbar() {
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
    }
  };

  return (
    <nav className={styles.navbar}>
      <img className={styles.mypic} src="/pp.png" alt="mypic" />
      <ul>
        <li><Link href='/'>Home</Link></li>
        <li><a onClick={(e) => handleLinkClick(e, '#about')}>About</a></li>
        <li><a onClick={(e) => handleLinkClick(e, '#skills')}>Skills</a></li>
        <li><Link href='/contact'>Contact</Link></li>
      </ul>
    </nav>
  );
}