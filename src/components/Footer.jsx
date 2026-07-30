import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-col footer-brand-col">
          <div className="footer-logo">
            <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
              <circle cx="16" cy="16" r="15" stroke="currentColor" strokeWidth="2" fill="none" />
              <path d="M10 16h12M16 10v12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
            <span>Florida Coastal</span>
          </div>
          <p className="footer-desc">
            Professional HVAC services for residential and commercial customers. Available 24/7 for all your heating and cooling needs.
          </p>
        </div>
        <div className="footer-col">
          <h4>Quick Links</h4>
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="footer-col">
          <h4>Services</h4>
          <Link to="/services">HVAC Installation</Link>
          <Link to="/services">AC Maintenance</Link>
          <Link to="/services">AC Repairs</Link>
          <Link to="/services">Ductwork</Link>
        </div>
        <div className="footer-col">
          <h4>Contact</h4>
          <a href="tel:+18638011904">(863) 801-1904</a>
          <p>Open 24 hours</p>
          <p>7 days a week</p>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>&copy; {new Date().getFullYear()} Florida Coastal Cooling & Heating LLC. All rights reserved.</p>
      </div>

      <style>{`
        .footer {
          background: var(--gray-900);
          padding: 64px 0 0;
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr 1fr;
          gap: 48px;
          padding-bottom: 48px;
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }
        .footer-logo {
          display: flex;
          align-items: center;
          gap: 8px;
          color: var(--white);
          font-weight: 800;
          font-size: 18px;
          margin-bottom: 16px;
        }
        .footer-desc {
          color: var(--gray-400);
          font-size: 14px;
          line-height: 1.7;
          max-width: 320px;
        }
        .footer-col h4 {
          color: var(--white);
          font-size: 14px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 20px;
        }
        .footer-col a,
        .footer-col p {
          display: block;
          color: var(--gray-400);
          font-size: 14px;
          text-decoration: none;
          padding: 4px 0;
          transition: color 0.2s;
        }
        .footer-col a:hover {
          color: var(--blue-300);
        }
        .footer-bottom {
          padding: 24px 0;
          text-align: center;
        }
        .footer-bottom p {
          color: var(--gray-500);
          font-size: 13px;
        }
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 32px;
          }
          .footer-brand-col {
            grid-column: 1 / -1;
          }
        }
        @media (max-width: 480px) {
          .footer-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </footer>
  )
}
