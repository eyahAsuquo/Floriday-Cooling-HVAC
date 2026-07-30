import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const milestones = [
  { year: '2020', event: 'Florida Coastal Cooling & Heating founded by Alejandro' },
  { year: '2021', event: 'Expanded residential HVAC services across Central Florida' },
  { year: '2023', event: 'Achieved 5.0-star rating with 100% customer satisfaction' },
  { year: '2025', event: 'Launched 24/7 emergency service for all HVAC needs' },
]

export default function About() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' })
  const storyRef = useRef(null)
  const storyInView = useInView(storyRef, { once: true, margin: '-80px' })
  const valuesRef = useRef(null)
  const valuesInView = useInView(valuesRef, { once: true, margin: '-80px' })

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
          <span className="section-label" style={{ color: 'var(--blue-300)' }}>About Us</span>
          <h1>Your Trusted HVAC Partner</h1>
          <p>Professional, punctual, and passionate about keeping your home comfortable year-round.</p>
        </motion.div>
      </section>

      <section className="section">
        <div className="container">
          <div ref={headerRef} className="about-story-grid">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={headerInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0, 1] }}
              className="about-story-text"
            >
              <span className="section-label">Our Story</span>
              <h2>Built on Trust, Driven by Quality</h2>
              <p>
                Florida Coastal Cooling & Heating LLC was founded by Alejandro "Alex" with a simple mission: 
                provide honest, reliable HVAC services at fair prices. With years of hands-on experience, 
                Alex built a company centered on the values that matter most to homeowners.
              </p>
              <p>
                We understand that your home's comfort system is a significant investment. That's why every 
                job we do is backed by thorough expertise, transparent communication, and a genuine commitment 
                to doing the job right the first time.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={headerInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0, 1], delay: 0.1 }}
              className="about-story-stats"
            >
              <div className="stat-big">
                <span className="stat-big-number">5.0</span>
                <span className="stat-big-label">Star Rating</span>
              </div>
              <div className="stat-big">
                <span className="stat-big-number">24/7</span>
                <span className="stat-big-label">Availability</span>
              </div>
              <div className="stat-big">
                <span className="stat-big-number">100%</span>
                <span className="stat-big-label">Satisfaction</span>
              </div>
              <div className="stat-big">
                <span className="stat-big-number">4+</span>
                <span className="stat-big-label">Years Serving</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <motion.div
            ref={valuesRef}
            initial={{ opacity: 0, y: 40 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0, 1] }}
            className="section-header"
          >
            <span className="section-label">Our Values</span>
            <h2>What Sets Us Apart</h2>
          </motion.div>

          <div className="values-grid">
            {[
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                ),
                title: 'Trust & Integrity',
                desc: 'We treat your home like our own. Honest assessments, transparent pricing, and no shortcuts.',
              },
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                ),
                title: 'Punctuality Matters',
                desc: 'We call or text before arriving and always meet our commitments. Your time is respected.',
              },
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                ),
                title: 'Quality Workmanship',
                desc: 'Every installation, repair, and maintenance job is done to the highest standards.',
              },
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-3-3.87"/><path d="M7 21v-2a4 4 0 0 1 3-3.87"/><circle cx="12" cy="7" r="4"/></svg>
                ),
                title: 'Customer First',
                desc: 'Your satisfaction drives everything we do. We are not happy until you are.',
              },
            ].map((v, i) => (
              <motion.div
                key={i}
                className="value-card"
                initial={{ opacity: 0, y: 40 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.6, ease: [0.25, 0.1, 0, 1], delay: 0.1 + i * 0.1 }}
              >
                <div className="value-icon">{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <motion.div
            ref={storyRef}
            initial={{ opacity: 0, y: 40 }}
            animate={storyInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0, 1] }}
            className="section-header"
          >
            <span className="section-label">Timeline</span>
            <h2>Our Journey</h2>
          </motion.div>

          <div className="timeline">
            {milestones.map((m, i) => (
              <motion.div
                key={i}
                className="timeline-item"
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                animate={storyInView ? { opacity: 1, x: 0 } : { opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                transition={{ duration: 0.7, ease: [0.25, 0.1, 0, 1], delay: i * 0.15 }}
              >
                <div className="timeline-year">{m.year}</div>
                <div className="timeline-dot" />
                <div className="timeline-content">
                  <p>{m.event}</p>
                </div>
              </motion.div>
            ))}
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
          background: radial-gradient(ellipse at 70% 30%, rgba(74,159,214,0.15) 0%, transparent 60%);
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
        .about-story-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: center;
        }
        .about-story-text h2 {
          font-size: clamp(28px, 3.5vw, 40px);
          font-weight: 800;
          color: var(--gray-900);
          letter-spacing: -0.03em;
          line-height: 1.2;
          margin-bottom: 20px;
        }
        .about-story-text p {
          color: var(--gray-500);
          font-size: 16px;
          line-height: 1.8;
          margin-bottom: 16px;
        }
        .about-story-stats {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        .stat-big {
          background: var(--white);
          border: 1px solid var(--gray-200);
          border-radius: var(--radius-lg);
          padding: 32px 20px;
          text-align: center;
        }
        .stat-big-number {
          display: block;
          font-size: 36px;
          font-weight: 900;
          color: var(--blue-600);
          line-height: 1;
          margin-bottom: 4px;
        }
        .stat-big-label {
          display: block;
          font-size: 14px;
          color: var(--gray-500);
          font-weight: 500;
        }
        .values-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 24px;
        }
        .value-card {
          background: var(--white);
          border: 1px solid var(--gray-200);
          border-radius: var(--radius-lg);
          padding: 32px;
          text-align: center;
          transition: all 0.4s ease;
        }
        .value-card:hover {
          border-color: var(--blue-200);
          box-shadow: var(--shadow-lg);
          transform: translateY(-4px);
        }
        .value-icon {
          width: 56px;
          height: 56px;
          border-radius: 16px;
          background: var(--blue-50);
          color: var(--blue-500);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
        }
        .value-card h3 {
          font-size: 18px;
          font-weight: 700;
          color: var(--gray-900);
          margin-bottom: 8px;
        }
        .value-card p {
          color: var(--gray-500);
          font-size: 14px;
          line-height: 1.7;
        }
        .timeline {
          max-width: 600px;
          margin: 0 auto;
          position: relative;
          padding-left: 40px;
        }
        .timeline::before {
          content: '';
          position: absolute;
          left: 15px;
          top: 0;
          bottom: 0;
          width: 2px;
          background: var(--blue-200);
        }
        .timeline-item {
          position: relative;
          display: flex;
          align-items: flex-start;
          gap: 24px;
          margin-bottom: 40px;
        }
        .timeline-year {
          font-weight: 800;
          font-size: 18px;
          color: var(--blue-500);
          white-space: nowrap;
          min-width: 50px;
        }
        .timeline-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: var(--blue-500);
          border: 3px solid var(--blue-100);
          position: absolute;
          left: -32px;
          top: 4px;
        }
        .timeline-content p {
          color: var(--gray-600);
          font-size: 15px;
          line-height: 1.6;
        }
        @media (max-width: 768px) {
          .about-story-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .about-story-stats {
            grid-template-columns: 1fr 1fr;
          }
        }
      `}</style>
    </main>
  )
}
