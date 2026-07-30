import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'

function AnimateOnView({ children, className, delay = 0 }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

const services = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
    ),
    title: 'HVAC Installation',
    desc: 'Expert system sizing and installation for maximum efficiency.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
    ),
    title: 'AC Maintenance',
    desc: 'Regular tune-ups to extend life and prevent breakdowns.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
    ),
    title: 'AC Repairs',
    desc: 'Fast, reliable diagnosis and repair for all brands.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
    ),
    title: 'Ductwork',
    desc: 'Custom duct design, sealing, and modifications.',
  },
]

const reviews = [
  {
    name: 'Sharon Slattery',
    badge: 'Local Guide',
    text: "I've used this company for more than a year and Alejandro is professional, knowledgeable and always on time. He calls or texts first, and always meets his commitments. I would recommend him highly.",
  },
  {
    name: 'Juan Cruz',
    badge: 'Local Guide',
    text: 'Great service, very professional and on time.',
  },
  {
    name: 'Zak Lata',
    text: 'I have used Alex for maintenance on my AC units and to make changes to some ductwork during a renovation and he even fixed a broken freezer. He is timely, affordable and trusting. Highly recommend.',
  },
]

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const staggerItem = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0, 1] },
  },
}

export default function Home() {
  const servicesRef = useRef(null)
  const servicesInView = useInView(servicesRef, { once: true, margin: '-80px' })
  const reviewsRef = useRef(null)
  const reviewsInView = useInView(reviewsRef, { once: true, margin: '-80px' })

  return (
    <main>
      <Hero />

      {/* Services Preview */}
      <section className="section" ref={servicesRef}>
        <div className="container">
          <AnimateOnView>
            <div className="section-header">
              <span className="section-label">Our Services</span>
              <h2>Professional HVAC Solutions</h2>
              <p>From installation to maintenance and repair, we handle all your heating and cooling needs.</p>
            </div>
          </AnimateOnView>

          <motion.div
            className="services-preview-grid"
            variants={staggerContainer}
            initial="hidden"
            animate={servicesInView ? 'visible' : 'hidden'}
          >
            {services.map((s, i) => (
              <motion.div key={i} variants={staggerItem} className="service-preview-card">
                <div className="sp-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <AnimateOnView delay={0.2}>
            <div className="services-cta">
              <Link to="/services" className="btn btn-outline-dark">
                View All Services
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </Link>
            </div>
          </AnimateOnView>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section section-alt">
        <div className="container">
          <div className="why-grid">
            <AnimateOnView className="why-content" delay={0}>
              <span className="section-label">Why Choose Us</span>
              <h2>The Florida Coastal Difference</h2>
              <p>When you choose us, you get more than an HVAC service. You get a partner who cares about your comfort as much as you do.</p>
              <ul className="why-list">
                {[
                  'Professional, punctual service every time',
                  'Transparent pricing with no hidden fees',
                  'Same-day service for urgent repairs',
                  'Experienced, factory-trained technicians',
                  '100% satisfaction guaranteed',
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.08, duration: 0.5, ease: [0.25, 0.1, 0, 1] }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--blue-500)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </AnimateOnView>
            <AnimateOnView className="why-stats" delay={0.2}>
              <div className="why-stat-card">
                <span className="why-stat-number">4+</span>
                <span className="why-stat-label">Years Experience</span>
              </div>
              <div className="why-stat-card">
                <span className="why-stat-number">500+</span>
                <span className="why-stat-label">Happy Customers</span>
              </div>
              <div className="why-stat-card">
                <span className="why-stat-number">5.0</span>
                <span className="why-stat-label">Star Rating</span>
              </div>
              <div className="why-stat-card">
                <span className="why-stat-number">24/7</span>
                <span className="why-stat-label">Emergency Service</span>
              </div>
            </AnimateOnView>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="section" ref={reviewsRef}>
        <div className="container">
          <AnimateOnView>
            <div className="section-header">
              <span className="section-label">Testimonials</span>
              <h2>What Our Customers Say</h2>
              <p>Rated 5.0 stars. Our customers are the heart of our business.</p>
            </div>
          </AnimateOnView>

          <motion.div
            className="reviews-grid-home"
            variants={staggerContainer}
            initial="hidden"
            animate={reviewsInView ? 'visible' : 'hidden'}
          >
            {reviews.map((r, i) => (
              <motion.div key={i} variants={staggerItem} className="review-card-home">
                <div className="review-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                <p className="review-text">"{r.text}"</p>
                <div className="review-author">
                  <strong>{r.name}</strong>
                  {r.badge && <span>{r.badge}</span>}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner">
        <div className="container">
          <AnimateOnView className="cta-banner-content" delay={0}>
            <h2>Ready to Upgrade Your Comfort?</h2>
            <p>Call us anytime for a free estimate. We are available 24/7.</p>
            <a href="tel:+18638011904" className="btn btn-primary btn-large">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              Call (863) 801-1904
            </a>
          </AnimateOnView>
        </div>
      </section>

      <style>{`
        .services-preview-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
          gap: 24px;
          margin-bottom: 40px;
        }
        .service-preview-card {
          background: var(--white);
          border: 1px solid var(--gray-200);
          border-radius: var(--radius-lg);
          padding: 32px 24px;
          text-align: center;
          transition: all 0.4s ease;
        }
        .service-preview-card:hover {
          border-color: var(--blue-200);
          box-shadow: var(--shadow-lg);
          transform: translateY(-6px);
        }
        .sp-icon {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          background: var(--blue-50);
          color: var(--blue-500);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 16px;
        }
        .service-preview-card h3 {
          font-size: 17px;
          font-weight: 700;
          color: var(--gray-900);
          margin-bottom: 8px;
        }
        .service-preview-card p {
          font-size: 14px;
          color: var(--gray-500);
          line-height: 1.6;
        }
        .services-cta {
          text-align: center;
        }
        .why-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: center;
        }
        .why-content h2 {
          font-size: clamp(28px, 3.5vw, 40px);
          font-weight: 800;
          color: var(--gray-900);
          letter-spacing: -0.03em;
          line-height: 1.2;
          margin-bottom: 16px;
        }
        .why-content > p {
          color: var(--gray-500);
          font-size: 16px;
          line-height: 1.7;
          margin-bottom: 28px;
        }
        .why-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .why-list li {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 15px;
          color: var(--gray-600);
        }
        .why-stats {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        .why-stat-card {
          background: var(--white);
          border: 1px solid var(--gray-200);
          border-radius: var(--radius-lg);
          padding: 32px 20px;
          text-align: center;
          transition: all 0.4s ease;
        }
        .why-stat-card:hover {
          border-color: var(--blue-200);
          box-shadow: var(--shadow-md);
          transform: translateY(-4px);
        }
        .why-stat-number {
          display: block;
          font-size: 34px;
          font-weight: 900;
          color: var(--blue-600);
          line-height: 1;
          margin-bottom: 4px;
        }
        .why-stat-label {
          font-size: 14px;
          color: var(--gray-500);
          font-weight: 500;
        }
        .reviews-grid-home {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 24px;
        }
        .review-card-home {
          background: var(--white);
          border: 1px solid var(--gray-200);
          border-radius: var(--radius-lg);
          padding: 32px;
          transition: all 0.4s ease;
        }
        .review-card-home:hover {
          box-shadow: var(--shadow-lg);
          transform: translateY(-4px);
        }
        .review-stars {
          color: #f59e0b;
          font-size: 18px;
          letter-spacing: 2px;
          margin-bottom: 16px;
        }
        .review-text {
          color: var(--gray-600);
          font-size: 15px;
          line-height: 1.7;
          margin-bottom: 20px;
          font-style: italic;
        }
        .review-author strong {
          display: block;
          font-size: 15px;
          color: var(--gray-900);
        }
        .review-author span {
          font-size: 13px;
          color: var(--gray-400);
        }
        .cta-banner {
          background: linear-gradient(135deg, var(--blue-900), var(--blue-700));
          padding: 100px 0;
        }
        .cta-banner-content {
          text-align: center;
          max-width: 560px;
          margin: 0 auto;
        }
        .cta-banner-content h2 {
          font-size: clamp(28px, 4vw, 42px);
          font-weight: 800;
          color: var(--white);
          letter-spacing: -0.03em;
          line-height: 1.2;
          margin-bottom: 16px;
        }
        .cta-banner-content p {
          color: var(--blue-200);
          font-size: 17px;
          margin-bottom: 32px;
        }
        .btn-large {
          padding: 20px 48px;
          font-size: 17px;
        }
        @media (max-width: 768px) {
          .why-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .reviews-grid-home {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </main>
  )
}
