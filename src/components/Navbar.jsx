import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/services', label: 'Services' },
  { path: '/about', label: 'About' },
  { path: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0, 1] }}
      className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}
    >
      <div className="nav-container container">
        <Link to="/" className="logo">
          <span className="logo-icon">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <circle cx="16" cy="16" r="15" stroke="currentColor" strokeWidth="2" fill="none" />
              <path d="M10 16h12M16 10v12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M8 8l3 3M24 8l-3 3M8 24l3-3M24 24l-3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
            </svg>
          </span>
          <span className="logo-text">
            <span className="logo-title">Florida Coastal</span>
            <span className="logo-sub">Cooling & Heating</span>
          </span>
        </Link>

        <ul className="nav-links">
          {navItems.map(item => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`nav-link ${pathname === item.path ? 'active' : ''}`}
              >
                {item.label}
                {pathname === item.path && (
                  <motion.div layoutId="nav-indicator" className="nav-indicator" />
                )}
              </Link>
            </li>
          ))}
        </ul>

        <a href="tel:+18638011904" className="nav-phone">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          (863) 801-1904
        </a>

        <button className={`mobile-toggle ${open ? 'active' : ''}`} onClick={() => setOpen(!open)} aria-label="Menu">
          <span></span><span></span><span></span>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0, 1] }}
            className="mobile-menu"
          >
            <ul className="mobile-links">
              {navItems.map((item, i) => (
                <motion.li
                  key={item.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.3, ease: [0.25, 0.1, 0, 1] }}
                >
                  <Link to={item.path} className={pathname === item.path ? 'active' : ''}>
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 16px 0;
          transition: all 0.4s ease;
          background: transparent;
        }
        .navbar-scrolled {
          background: rgba(255,255,255,0.95);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          padding: 12px 0;
          box-shadow: 0 1px 3px rgba(0,0,0,0.06);
        }
        .nav-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
        }
        .logo {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          color: var(--white);
          transition: color 0.3s;
        }
        .navbar-scrolled .logo {
          color: var(--blue-800);
        }
        .logo-text {
          display: flex;
          flex-direction: column;
          line-height: 1.15;
        }
        .logo-title {
          font-weight: 800;
          font-size: 18px;
          letter-spacing: -0.02em;
        }
        .logo-sub {
          font-weight: 500;
          font-size: 11px;
          opacity: 0.7;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }
        .nav-links {
          display: flex;
          gap: 36px;
          list-style: none;
        }
        .nav-link {
          text-decoration: none;
          font-weight: 500;
          font-size: 15px;
          color: var(--white);
          position: relative;
          padding: 4px 0;
          transition: color 0.3s;
        }
        .navbar-scrolled .nav-link {
          color: var(--gray-600);
        }
        .navbar-scrolled .nav-link.active,
        .nav-link:hover {
          color: var(--blue-500);
        }
        .nav-indicator {
          position: absolute;
          bottom: -2px;
          left: 0;
          right: 0;
          height: 2px;
          background: var(--blue-400);
          border-radius: 2px;
        }
        .nav-phone {
          text-decoration: none;
          font-weight: 700;
          font-size: 14px;
          color: var(--white);
          display: flex;
          align-items: center;
          gap: 6px;
          white-space: nowrap;
          flex-shrink: 0;
          transition: color 0.3s;
        }
        .navbar-scrolled .nav-phone {
          color: var(--blue-600);
        }
        .mobile-toggle {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
        }
        .mobile-toggle span {
          display: block;
          width: 24px;
          height: 2px;
          background: var(--white);
          border-radius: 2px;
          transition: all 0.3s ease;
        }
        .navbar-scrolled .mobile-toggle span {
          background: var(--gray-700);
        }
        .mobile-toggle.active span:nth-child(1) {
          transform: rotate(45deg) translate(5px, 5px);
        }
        .mobile-toggle.active span:nth-child(2) {
          opacity: 0;
        }
        .mobile-toggle.active span:nth-child(3) {
          transform: rotate(-45deg) translate(5px, -5px);
        }
        .nav-phone:hover {
          opacity: 0.8;
        }
        .mobile-menu {
          background: rgba(255,255,255,0.98);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          overflow: hidden;
        }
        .mobile-links {
          list-style: none;
          padding: 8px 24px 20px;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .mobile-links a {
          display: block;
          padding: 12px 16px;
          text-decoration: none;
          font-size: 16px;
          font-weight: 500;
          color: var(--gray-700);
          border-radius: 10px;
          transition: all 0.2s;
        }
        .mobile-links a.active,
        .mobile-links a:hover {
          background: var(--blue-50);
          color: var(--blue-600);
        }
        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }
          .nav-phone {
            display: none;
          }
          .mobile-toggle {
            display: flex;
          }
        }
      `}</style>
    </motion.nav>
  )
}
