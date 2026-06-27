import { profile, stats } from '../../data/content';
import SectionHeader from '../SectionHeader';
import Reveal from '../Reveal';

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 md:py-32">
      <SectionHeader index="01 / ABOUT" title="Who's writing the code" note="PROFILE.md" />

      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
        {/* Bio */}
        <div>
          <Reveal>
            <p className="font-serif text-2xl leading-relaxed text-fg sm:text-3xl">
              {profile.bioShort}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-dim sm:text-lg">
              {profile.bio}
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <span className="dim-label">OPEN TO</span>
              {profile.openTo.split(' · ').map((role) => (
                <span
                  key={role}
                  className="border border-line-strong px-3 py-1.5 font-mono text-xs text-dim"
                >
                  {role}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Photo placeholder + spec block */}
        <Reveal delay={0.15}>
          <div className="corner-ticks group relative aspect-[4/5] w-full max-w-sm overflow-hidden border border-line-strong">
            {/* photo */}
            <img
              src="/pablo.jpg"
              alt="Pablo Cunha"
              width={900}
              height={1600}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover object-center grayscale transition-all duration-700 group-hover:grayscale-0"
            />
            {/* blueprint tint + grid overlay */}
            <div className="pointer-events-none absolute inset-0 mix-blend-overlay" style={{ background: 'linear-gradient(180deg, transparent 40%, rgba(34,211,238,0.12))' }} />
            <div className="blueprint-grid-fine pointer-events-none absolute inset-0 opacity-20" />
            {/* scan sweep */}
            <span className="pointer-events-none absolute inset-x-0 top-0 h-16 animate-sweep bg-gradient-to-b from-transparent via-accent/20 to-transparent" />
            {/* annotation marks */}
            <span className="dim-label absolute -top-2 left-4 bg-base px-2">SUBJECT</span>
            <span className="dim-label absolute -bottom-2 right-4 bg-base px-2">
              {profile.location}
            </span>
            <span className="absolute right-3 top-3 font-mono text-[10px] text-accent">●REC</span>
          </div>
        </Reveal>
      </div>

      {/* Stats */}
      <div className="mt-20 grid grid-cols-2 gap-px border border-line-strong bg-[var(--line)] lg:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08}>
            <div className="group h-full bg-base p-6 transition-colors hover:bg-soft sm:p-8">
              <div className="flex items-baseline gap-1">
                <span className="font-serif text-5xl tracking-tightest text-fg transition-colors group-hover:text-accent sm:text-6xl">
                  {s.value}
                </span>
                <span className="font-serif text-2xl text-accent">{s.suffix}</span>
              </div>
              <div className="mt-3 font-mono text-xs uppercase tracking-wide text-fg">{s.label}</div>
              <div className="mt-1 font-mono text-[10px] text-faint">{s.sub}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
