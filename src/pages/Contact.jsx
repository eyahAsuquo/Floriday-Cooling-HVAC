import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const formRef = useRef(null)
  const formInView = useInView(formRef, { once: true, margin: '-80px' })
  const infoRef = useRef(null)
  const infoInView = useInView(infoRef, { once: true, margin: '-80px' })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <main>
      <section className="page-hero">
        <div className="page-hero-bg" />
        <motion.div
          className="container page-hero-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0, 1] }}
        >
          <span className="section-label" style={{ color: 'var(--blue-300)' }}>Contact</span>
          <h1>Get In Touch</h1>
          <p>Ready to upgrade your comfort? Call us anytime or send a message and we will get back to you promptly.</p>
        </motion.div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <motion.div
              ref={formRef}
              initial={{ opacity: 0, x: -30 }}
              animate={formInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0, 1] }}
            >
              <h2 className="contact-form-title">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input id="name" type="text" required placeholder="Your name" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" required placeholder="Your email" />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input id="phone" type="tel" required placeholder="Your phone number" />
                </div>
                <div className="form-group">
                  <label htmlFor="service">Service Needed</label>
                  <select id="service" required>
                    <option value="">Select a service...</option>
                    <option value="installation">New HVAC Installation</option>
                    <option value="maintenance">AC Maintenance</option>
                    <option value="repair">AC Repair</option>
                    <option value="ductwork">Ductwork</option>
                    <option value="heating">Heating</option>
                    <option value="appliance">Appliance Repair</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" rows="4" required placeholder="Describe your issue or question..." />
                </div>
                <motion.button
                  type="submit"
                  className="btn btn-primary"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {sent ? 'Sent! We will call you back' : 'Send Message'}
                </motion.button>
              </form>
            </motion.div>

            <motion.div
              ref={infoRef}
              initial={{ opacity: 0, x: 30 }}
              animate={infoInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0, 1], delay: 0.1 }}
              className="contact-info"
            >
              <h2>Contact Information</h2>
              <div className="contact-info-cards">
                <div className="contact-info-card">
                  <div className="cic-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  </div>
                  <div>
                    <h3>Call Us</h3>
                    <a href="tel:+18638011904" className="cic-link">(863) 801-1904</a>
                    <p className="cic-sub">Available 24/7</p>
                  </div>
                </div>
                <div className="contact-info-card">
                  <div className="cic-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  </div>
                  <div>
                    <h3>Hours</h3>
                    <p className="cic-value">Open 24 Hours</p>
                    <p className="cic-sub">7 days a week</p>
                  </div>
                </div>
                <div className="contact-info-card">
                  <div className="cic-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  </div>
                  <div>
                    <h3>Service Area</h3>
                    <p className="cic-value">Central Florida</p>
                    <p className="cic-sub">And surrounding areas</p>
                  </div>
                </div>
              </div>

              <div className="contact-cta-box">
                <h3>Emergency?</h3>
                <p>We offer 24/7 emergency HVAC services. Do not hesitate to call.</p>
                <a href="tel:+18638011904" className="btn btn-primary" style={{ width: '100%' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  Call (863) 801-1904
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <style>{`
        .page-hero {
          position: relative;
          padding: 160px 0 80px;
          overflow: hidden;
        }
        .page-hero-bg {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, var(--blue-900), var(--blue-700));
        }
        .page-hero-bg::after {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at 50% 80%, rgba(237,148,74,0.1) 0%, transparent 50%);
        }
        .page-hero-content {
          position: relative;
          z-index: 1;
          text-align: center;
          max-width: 640px;
          margin: 0 auto;
        }
        .page-hero-content h1 {
          font-size: clamp(36px, 5vw, 52px);
          font-weight: 800;
          color: var(--white);
          letter-spacing: -0.03em;
          line-height: 1.15;
          margin-bottom: 16px;
        }
        .page-hero-content p {
          color: var(--blue-200);
          font-size: 17px;
          line-height: 1.7;
        }
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 380px;
          gap: 64px;
          align-items: start;
        }
        .contact-form-title {
          font-size: 24px;
          font-weight: 700;
          color: var(--gray-900);
          margin-bottom: 28px;
        }
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .form-group label {
          font-size: 13px;
          font-weight: 600;
          color: var(--gray-700);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .form-group input,
        .form-group select,
        .form-group textarea {
          padding: 14px 16px;
          border: 1px solid var(--gray-200);
          border-radius: 10px;
          font-size: 15px;
          font-family: inherit;
          color: var(--gray-800);
          background: var(--white);
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--blue-400);
          box-shadow: 0 0 0 3px var(--blue-50);
        }
        .form-group textarea {
          resize: vertical;
        }
        .contact-info h2 {
          font-size: 24px;
          font-weight: 700;
          color: var(--gray-900);
          margin-bottom: 24px;
        }
        .contact-info-cards {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-bottom: 24px;
        }
        .contact-info-card {
          display: flex;
          gap: 16px;
          align-items: center;
          padding: 20px;
          border: 1px solid var(--gray-200);
          border-radius: var(--radius);
          transition: box-shadow 0.3s;
        }
        .contact-info-card:hover {
          box-shadow: var(--shadow-md);
        }
        .cic-icon {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: var(--blue-50);
          color: var(--blue-500);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .contact-info-card h3 {
          font-size: 15px;
          font-weight: 600;
          color: var(--gray-800);
          margin-bottom: 2px;
        }
        .cic-link {
          font-size: 18px;
          font-weight: 700;
          color: var(--blue-600);
          text-decoration: none;
        }
        .cic-link:hover {
          text-decoration: underline;
        }
        .cic-value {
          font-size: 14px;
          font-weight: 600;
          color: var(--gray-700);
        }
        .cic-sub {
          font-size: 13px;
          color: var(--gray-400);
        }
        .contact-cta-box {
          background: var(--blue-50);
          border: 1px solid var(--blue-100);
          border-radius: var(--radius-lg);
          padding: 24px;
          text-align: center;
        }
        .contact-cta-box h3 {
          font-size: 18px;
          font-weight: 700;
          color: var(--blue-800);
          margin-bottom: 8px;
        }
        .contact-cta-box p {
          font-size: 14px;
          color: var(--gray-500);
          margin-bottom: 20px;
        }
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 48px;
          }
          .form-row {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </main>
  )
}
