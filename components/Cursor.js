'use client'

import { useEffect } from 'react';

export default function Cursor() {
  useEffect(() => {
    const cursor = document.querySelector('.cursor');

    // Define the event handler function
    const handleMouseMove = (e) => {
      // Use clientX and clientY for positioning relative to the viewport
      const x = e.clientX;
      const y = e.clientY;
      cursor.style.top = y + 'px';
      cursor.style.left = x + 'px';
    };

    if (cursor) {
      document.addEventListener('mousemove', handleMouseMove);
    }

    // Return the cleanup function
    return () => {
      if (cursor) {
        document.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []); // Empty dependency array ensures this effect runs only once

  return <div className="cursor"></div>;
}