import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { profile } from '../../data/content';
import { scrollToSection } from '../../hooks/useLenis';
import Magnetic from '../Magnetic';
import DecodeText from '../DecodeText';

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden px-5 pt-24 sm:px-8"
    >
      {/* Blueprint backdrop */}
      <div className="blueprint-grid pointer-events-none absolute inset-0 opacity-70" />
      <div className="mesh-accent pointer-events-none absolute inset-0 opacity-60" />
      {/* dimension frame */}
      <div className="pointer-events-none absolute inset-5 hidden border border-line sm:block sm:inset-8" />
      <span className="dim-label pointer-events-none absolute left-8 top-1/2 hidden -translate-y-1/2 -rotate-90 sm:block">
        {profile.locationCoords}
      </span>
      <span className="dim-label pointer-events-none absolute right-8 top-1/2 hidden -translate-y-1/2 rotate-90 sm:block">
        FIG.00 — INDEX
      </span>

      <motion.div style={{ y, opacity }} className="relative mx-auto w-full max-w-7xl">
        {/* meta row */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-8 flex flex-wrap items-center gap-x-4 gap-y-2"
        >
          <span className="flex items-center gap-2 font-mono text-xs tracking-wide text-dim">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            OPEN TO WORK
          </span>
          <span className="h-3 w-px bg-line-strong" />
          <span className="font-mono text-xs tracking-wide text-faint">{profile.location}</span>
        </motion.div>

        {/* Name */}
        <h1 className="font-serif tracking-tightest text-fg">
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="block text-[15vw] leading-[0.88] sm:text-[12vw] lg:text-[10rem]"
          >
            {profile.firstName}
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
            className="block text-[15vw] leading-[0.88] text-dim sm:text-[12vw] lg:text-[10rem]"
          >
            {profile.lastName}
            <span className="text-accent">.</span>
          </motion.span>
        </h1>

        {/* role + hook */}
        <div className="mt-8 grid gap-8 md:mt-12 md:grid-cols-[1fr_auto] md:items-end">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="max-w-xl"
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-accent" />
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                {profile.title} / {profile.specialty}
              </span>
            </div>
            <p className="font-serif text-2xl leading-snug text-fg sm:text-3xl">
              <DecodeText text={profile.hooks[0]} speed={22} triggerOnView={false} />
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65 }}
            className="flex flex-col gap-3 sm:flex-row md:flex-col"
          >
            <Magnetic>
              <button
                onClick={() => scrollToSection('projects')}
                data-cursor="link"
                data-cursor-label="view"
                className="group relative flex items-center justify-center gap-3 overflow-hidden border border-accent px-7 py-3.5 font-mono text-xs uppercase tracking-widest text-accent transition-colors"
              >
                <span className="absolute inset-0 origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100" />
                <span className="relative transition-colors duration-300 group-hover:text-ink">
                  View the work
                </span>
                <span className="relative transition-colors duration-300 group-hover:text-ink">→</span>
              </button>
            </Magnetic>
            <Magnetic>
              <button
                onClick={() => scrollToSection('contact')}
                data-cursor="link"
                className="flex items-center justify-center gap-2 border border-line-strong px-7 py-3.5 font-mono text-xs uppercase tracking-widest text-dim transition-colors hover:border-accent hover:text-fg"
              >
                Get in touch
              </button>
            </Magnetic>
          </motion.div>
        </div>
      </motion.div>

      {/* scroll cue */}
      <motion.button
        onClick={() => scrollToSection('about')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
        aria-label="Scroll down"
        data-cursor="link"
      >
        <span className="dim-label">SCROLL</span>
        <span className="relative h-10 w-px overflow-hidden bg-line-strong">
          <motion.span
            className="absolute inset-x-0 top-0 h-4 bg-accent"
            animate={{ y: [-16, 40] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          />
        </span>
      </motion.button>
    </section>
  );
}
