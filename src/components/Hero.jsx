import { useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const slides = [
  {
    url: 'https://picsum.photos/seed/hvac-ac-install/1920/1080',
    overlay: 'linear-gradient(135deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.35) 100%), linear-gradient(to top, rgba(0,0,0,0.3) 0%, transparent 50%)',
    fallback: 'linear-gradient(135deg, #0c1b33 0%, #1a5c8a 50%, #0f2a4a 100%)',
  },
  {
    url: 'https://picsum.photos/seed/hvac-ductwork/1920/1080',
    overlay: 'linear-gradient(135deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.35) 100%), linear-gradient(to top, rgba(0,0,0,0.3) 0%, transparent 50%)',
    fallback: 'linear-gradient(135deg, #0f2a4a 0%, #1a5c8a 40%, #143e66 100%)',
  },
  {
    url: 'https://picsum.photos/seed/hvac-repair/1920/1080',
    overlay: 'linear-gradient(135deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.35) 100%), linear-gradient(to top, rgba(0,0,0,0.3) 0%, transparent 50%)',
    fallback: 'linear-gradient(135deg, #0f2a4a 0%, #1a5c8a 60%, #0c1b33 100%)',
  },
]

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [imagesLoaded, setImagesLoaded] = useState(false)

  const next = useCallback(() => {
    setCurrent(prev => (prev + 1) % slides.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(next, 6000)
    return () => clearInterval(timer)
  }, [next])

  useEffect(() => {
    let count = 0
    slides.forEach(s => {
      const img = new Image()
      img.onload = img.onerror = () => {
        count++
        if (count === slides.length) setImagesLoaded(true)
      }
      img.src = s.url
    })
  }, [])

  return (
    <section className="hero">
      <div className="hero-bg-fixed" />

      {slides.map((s, i) => (
        <motion.div
          key={i}
          className="hero-slide"
          style={{
            backgroundImage: imagesLoaded
              ? `${s.overlay}, url(${s.url})`
              : s.fallback,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          initial={false}
          animate={{ opacity: i === current ? 1 : 0 }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0, 1] }}
        />
      ))}

      {!imagesLoaded && (
        <div className="hero-bg-fallback" />
      )}

      <div className="hero-overlay" />

      <div className="hero-slide-indicators">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`hero-dot ${i === current ? 'active' : ''}`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      <div className="container hero-content">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0, 1], delay: 0.1 }}
          className="hero-badge"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="#f59e0b">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
          </svg>
          5.0 &middot; 4 Reviews
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0, 1], delay: 0.25 }}
        >
          Upgrade Your Comfort with a New HVAC System
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0, 1], delay: 0.4 }}
        >
          Expert HVAC installation, maintenance, and repair services you can trust. Reliable, affordable, and available 24/7.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0, 1], delay: 0.55 }}
          className="hero-actions"
        >
          <a href="tel:+18638011904" className="btn btn-primary">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            Call (863) 801-1904
          </a>
          <Link to="/contact" className="btn btn-outline">
            Request Estimate
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0, 1], delay: 0.7 }}
          className="hero-features"
        >
          <span className="hero-feature">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
            </svg>
            24/7 Availability
          </span>
          <span className="hero-feature">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
            Licensed & Insured
          </span>
          <span className="hero-feature">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
            Same-Day Service
          </span>
        </motion.div>
      </div>

      <div className="hero-scroll">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/>
        </svg>
      </div>

      <style>{`
        .hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          overflow: hidden;
          background: #0c1b33;
        }
        .hero-bg-fixed {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #0c1b33, #1a5c8a, #0f2a4a);
          z-index: 0;
        }
        .hero-slide {
          position: absolute;
          inset: 0;
          z-index: 1;
          will-change: opacity;
          background-repeat: no-repeat;
        }
        .hero-overlay {
          position: absolute;
          inset: 0;
          z-index: 2;
          pointer-events: none;
          background:
            radial-gradient(ellipse at 30% 50%, rgba(74,159,214,0.1) 0%, transparent 60%),
            radial-gradient(ellipse at 80% 20%, rgba(224,122,47,0.06) 0%, transparent 50%);
        }
        .hero-content {
          position: relative;
          z-index: 4;
          text-align: center;
          max-width: 720px;
          margin: 0 auto;
          padding: 120px 24px 80px;
        }
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(255,255,255,0.1);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          color: var(--white);
          padding: 8px 20px;
          border-radius: 50px;
          font-size: 14px;
          font-weight: 500;
          margin-bottom: 32px;
          border: 1px solid rgba(255,255,255,0.15);
        }
        .hero h1 {
          font-size: clamp(38px, 6.5vw, 64px);
          font-weight: 900;
          line-height: 1.1;
          color: var(--white);
          margin-bottom: 20px;
          letter-spacing: -0.03em;
          text-shadow: 0 2px 30px rgba(0,0,0,0.3);
        }
        .hero p {
          font-size: 18px;
          color: rgba(255,255,255,0.85);
          line-height: 1.7;
          margin-bottom: 36px;
          max-width: 540px;
          margin-left: auto;
          margin-right: auto;
          text-shadow: 0 1px 20px rgba(0,0,0,0.25);
        }
        .hero-actions {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 48px;
        }
        .hero-features {
          display: flex;
          gap: 32px;
          justify-content: center;
          flex-wrap: wrap;
        }
        .hero-feature {
          display: flex;
          align-items: center;
          gap: 8px;
          color: rgba(255,255,255,0.6);
          font-size: 14px;
          font-weight: 500;
        }
        .hero-feature svg {
          flex-shrink: 0;
        }
        .hero-slide-indicators {
          position: absolute;
          bottom: 100px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 10px;
          z-index: 4;
        }
        .hero-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          border: 2px solid rgba(255,255,255,0.4);
          background: transparent;
          cursor: pointer;
          transition: all 0.4s ease;
          padding: 0;
        }
        .hero-dot.active {
          background: var(--white);
          border-color: var(--white);
          width: 32px;
          border-radius: 5px;
        }
        .hero-scroll {
          position: absolute;
          bottom: 32px;
          left: 50%;
          transform: translateX(-50%);
          color: rgba(255,255,255,0.3);
          animation: bounce 2s infinite;
          z-index: 4;
        }
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(8px); }
        }
        @media (max-width: 768px) {
          .hero-dot { width: 8px; height: 8px; }
          .hero-dot.active { width: 24px; }
          .hero-features { gap: 16px; }
        }
      `}</style>
    </section>
  )
}
