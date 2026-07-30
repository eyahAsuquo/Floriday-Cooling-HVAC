import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

function AnimateOnView({ children, className, delay = 0 }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7, ease: [0.25, 0.1, 0, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

const services = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
    ),
    title: 'New HVAC Installation',
    description: 'Expert system sizing, selection, and installation for optimal performance and energy efficiency. We ensure your new system is perfectly matched to your space.',
    features: ['Free load calculation', 'Premium equipment brands', 'Professional installation', 'Warranty included'],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
    ),
    title: 'AC Maintenance',
    description: 'Regular tune-ups to extend your system lifespan, improve energy efficiency, and prevent costly breakdowns before they happen.',
    features: ['Comprehensive inspection', 'Filter replacement', 'Coil cleaning', 'Performance check'],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
    ),
    title: 'AC Repairs',
    description: 'Fast, reliable diagnosis and repair for all makes and models. Same-day service available to get your comfort back quickly.',
    features: ['Same-day service', 'All brands serviced', 'Upfront pricing', '90-day warranty on repairs'],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.29 7 12 12 20.71 7"/><line x1="12" y1="22" x2="12" y2="12"/></svg>
    ),
    title: 'Ductwork & Renovation',
    description: 'Custom ductwork design and modification for renovations, additions, and system upgrades to ensure proper airflow throughout your home.',
    features: ['Custom design', 'Sealing & insulation', 'Zoning solutions', 'Airflow balancing'],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/><path d="M8 19h8"/><path d="M8 22h8"/></svg>
    ),
    title: 'Heating Services',
    description: 'Complete heating system installation, repair, and maintenance to keep your home warm and comfortable all winter long.',
    features: ['Furnace repair & install', 'Heat pump services', 'Thermostat upgrades', 'Emergency service'],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="9" y1="6" x2="15" y2="6"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
    ),
    title: 'Appliance Repair',
    description: 'Expert repair service for freezers, refrigerators, and other household appliances. Fast, affordable solutions you can count on.',
    features: ['Freezer repair', 'Refrigerator service', 'Diagnostic testing', 'Affordable rates'],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0, 1] },
  },
}

export default function Services() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' })

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
          <span className="section-label" style={{ color: 'var(--blue-300)' }}>Our Services</span>
          <h1>Complete HVAC Solutions</h1>
          <p>From installation to maintenance and repair, we handle all your heating and cooling needs with professionalism and care.</p>
        </motion.div>
      </section>

      <section className="section">
        <div className="container">
          <motion.div
            ref={headerRef}
            initial={{ opacity: 0, y: 40 }}
            animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0, 1] }}
            className="section-header"
          >
            <span className="section-label">What We Offer</span>
            <h2>Expert Services You Can Trust</h2>
            <p>Every service is backed by our commitment to quality, punctuality, and customer satisfaction.</p>
          </motion.div>

          <motion.div
            className="services-detailed"
            variants={containerVariants}
            initial="hidden"
            animate={headerInView ? 'visible' : 'hidden'}
          >
            {services.map((svc, i) => (
              <motion.div key={i} variants={cardVariants} className="service-detailed-card" style={{ transitionDelay: `${i * 0.05}s` }}>
                <div className="sdc-icon">{svc.icon}</div>
                <div className="sdc-body">
                  <h3>{svc.title}</h3>
                  <p>{svc.description}</p>
                  <ul className="sdc-features">
                    {svc.features.map((f, j) => (
                      <li key={j}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--blue-500)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <AnimateOnView className="cta-simple" delay={0}>
            <h2>Not Sure What You Need?</h2>
            <p>Call us anytime for a free consultation. We'll help you find the right solution.</p>
            <a href="tel:+18638011904" className="btn btn-primary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              (863) 801-1904
            </a>
          </AnimateOnView>
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
          background: radial-gradient(ellipse at 30% 50%, rgba(74,159,214,0.15) 0%, transparent 60%);
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
        .services-detailed {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
          gap: 24px;
        }
        .service-detailed-card {
          background: var(--white);
          border: 1px solid var(--gray-200);
          border-radius: var(--radius-lg);
          padding: 32px;
          display: flex;
          gap: 20px;
          transition: all 0.4s ease;
        }
        .service-detailed-card:hover {
          border-color: var(--blue-200);
          box-shadow: var(--shadow-lg);
          transform: translateY(-4px);
        }
        .sdc-icon {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          background: var(--blue-50);
          color: var(--blue-500);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .sdc-body h3 {
          font-size: 18px;
          font-weight: 700;
          color: var(--gray-900);
          margin-bottom: 8px;
        }
        .sdc-body p {
          color: var(--gray-500);
          font-size: 14px;
          line-height: 1.7;
          margin-bottom: 16px;
        }
        .sdc-features {
          list-style: none;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6px;
        }
        .sdc-features li {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          color: var(--gray-600);
        }
        .cta-simple {
          text-align: center;
          padding: 48px 0;
        }
        .cta-simple h2 {
          font-size: clamp(24px, 3vw, 36px);
          font-weight: 800;
          color: var(--gray-900);
          margin-bottom: 12px;
        }
        .cta-simple p {
          color: var(--gray-500);
          margin-bottom: 28px;
          font-size: 16px;
        }
        @media (max-width: 768px) {
          .services-detailed {
            grid-template-columns: 1fr;
          }
          .service-detailed-card {
            flex-direction: column;
          }
          .sdc-features {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </main>
  )
}
