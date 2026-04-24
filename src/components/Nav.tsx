import { useState, useEffect } from 'react';
import cvdsLogo from './cvds-logo.png';

const CALENDLY = 'https://calendly.com/cecile-pagneux/intro-call-digital-business-acquisition';

const links = [
  ['#why', 'Why Australia'],
  ['#approach', 'How We Help'],
  ['#forwho', 'Who We Work With'],
  ['#about', 'About'],
  ['#model', 'Our Model'],
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <>
