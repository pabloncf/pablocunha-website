import { education, languages } from '../../data/content';
import SectionHeader from '../SectionHeader';
import Reveal from '../Reveal';

export default function Education() {
  return (
    <section id="education" className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 md:py-32">
      <SectionHeader index="05 / RECORD" title="Education & languages" note="GISMA · UNIPÊ" />

      <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
        {/* education */}
        <div className="space-y-px">
          {education.map((ed, i) => (
            <Reveal key={ed.degree} delay={i * 0.08}>
              <div className="group flex flex-col gap-2 border-t border-line-strong py-7 sm:flex-row sm:items-baseline sm:justify-between">
                <div>
                  <div className="flex items-center gap-3">
                    <span
                      className={`h-2 w-2 rounded-full ${
                        ed.status === 'In progress' ? 'animate-pulse bg-accent' : 'bg-[var(--fg-faint)]'
                      }`}
                    />
                    <h3 className="font-serif text-2xl tracking-tightest text-fg transition-colors group-hover:text-accent sm:text-3xl">
                      {ed.degree}
                    </h3>
                  </div>
                  <p className="mt-2 pl-5 font-mono text-sm text-dim">{ed.school}</p>
                  <p className="pl-5 font-mono text-xs text-faint">{ed.location}</p>
                </div>
                <div className="pl-5 text-left sm:pl-0 sm:text-right">
                  <div className="font-mono text-sm text-fg">{ed.period}</div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-accent">
                    {ed.status}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* languages */}
        <Reveal delay={0.1}>
          <div className="corner-ticks border border-line-strong p-6 sm:p-8">
            <span className="dim-label">SPOKEN — 4</span>
            <div className="mt-6 space-y-5">
              {languages.map((lang) => (
                <div key={lang.code} className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center border border-line-strong font-mono text-[10px] text-accent">
                      {lang.code}
                    </span>
                    <span className="font-serif text-lg text-fg">{lang.name}</span>
                  </div>
                  <span className="font-mono text-xs text-dim">{lang.level}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
