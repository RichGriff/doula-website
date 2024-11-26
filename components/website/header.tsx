'use client'

import { useEffect, useState } from 'react';
import Navbar from './navbar'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // If the page is scrolled down more than 10px, set isScrolled to true
      setIsScrolled(window.scrollY > 10);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="bg-[#F4ECE4] h-24">
      <header
        className={`inset-x-0 top-0 z-50 fixed transition-colors duration-300 ${
          isScrolled ? 'bg-[#F4ECE499] backdrop-blur' : 'bg-transparent'
        }`}
      >
        <Navbar />
      </header>
    </div>
  )
}
