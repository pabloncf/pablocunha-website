import { profile } from '../../data/content';
import SectionHeader from '../SectionHeader';
import Reveal from '../Reveal';
import Magnetic from '../Magnetic';

const CHANNELS = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, code: 'SMTP' },
  { label: 'LinkedIn', value: 'in/pabloncf', href: profile.linkedin, code: 'PROF' },
  { label: 'GitHub', value: `@${profile.githubHandle}`, href: profile.github, code: 'REPO' },
];

export default function Contact() {
  return (
    <section id="contact" className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 md:py-32">
      <SectionHeader index="06 / CONTACT" title="Let's talk" note="STATUS: OPEN" />

      <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
        {/* big CTA */}
        <Reveal>
          <p className="font-serif text-3xl leading-snug text-fg sm:text-4xl">
            Looking for a backend or security engineer who sweats the details?
          </p>
          <p className="mt-6 max-w-md text-base leading-relaxed text-dim">
            I'm in Berlin and open to roles across Europe and remote-global teams. Drop me a line —
            I read everything and reply fast.
          </p>

          <Magnetic>
            <a
              href={`mailto:${profile.email}`}
              data-cursor="link"
              data-cursor-label="mail"
              className="group mt-10 inline-flex items-center gap-4 overflow-hidden border border-accent px-8 py-5"
            >
              <span className="absolute" />
              <span className="font-serif text-2xl text-fg transition-colors group-hover:text-accent sm:text-3xl">
                Say hello
              </span>
              <span className="font-mono text-accent transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
          </Magnetic>
        </Reveal>

        {/* channels */}
        <Reveal delay={0.1}>
          <div className="grid gap-px border border-line-strong bg-[var(--line)]">
            {CHANNELS.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                data-cursor="link"
                data-cursor-label="open"
                className="group flex items-center justify-between bg-base p-6 transition-colors hover:bg-soft sm:p-8"
              >
                <div className="flex items-center gap-4">
                  <span className="font-mono text-[10px] tracking-widest text-faint">{c.code}</span>
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-dim">
                      {c.label}
                    </div>
                    <div className="font-serif text-xl text-fg transition-colors group-hover:text-accent">
                      {c.value}
                    </div>
                  </div>
                </div>
                <span className="font-mono text-lg text-faint transition-all group-hover:translate-x-1 group-hover:text-accent">
                  ↗
                </span>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
