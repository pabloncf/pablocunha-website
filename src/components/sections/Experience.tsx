import { motion } from 'framer-motion';
import { experience } from '../../data/content';
import SectionHeader from '../SectionHeader';
import Reveal from '../Reveal';

export default function Experience() {
  return (
    <section id="experience" className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 md:py-32">
      <SectionHeader index="03 / PATH" title="The career so far" note="2020 → NOW" />

      <div className="relative">
        {/* vertical rail */}
        <div className="absolute left-0 top-2 hidden h-full w-px bg-line-strong sm:left-[7.5rem] sm:block" />

        <div className="space-y-px">
          {experience.map((job, i) => (
            <Reveal key={job.company} delay={i * 0.06}>
              <div className="group relative grid gap-2 py-8 sm:grid-cols-[7.5rem_1fr] sm:gap-8">
                {/* year + node */}
                <div className="relative flex items-center gap-3 sm:block">
                  <span className="font-mono text-sm text-accent">{job.start}</span>
                  <span className="absolute -left-[5px] top-1.5 hidden h-2.5 w-2.5 rounded-full border border-accent bg-base transition-colors group-hover:bg-accent sm:left-[7.5rem] sm:block" />
                </div>

                {/* content */}
                <div className="sm:pl-8">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-serif text-2xl tracking-tightest text-fg transition-colors group-hover:text-accent sm:text-3xl">
                      {job.company}
                    </h3>
                    <span className="font-mono text-xs text-faint">{job.period}</span>
                  </div>
                  <p className="mt-1 font-mono text-sm text-dim">{job.role}</p>

                  <ul className="mt-4 space-y-2">
                    {job.points.map((pt) => (
                      <li key={pt} className="flex gap-3 text-sm leading-relaxed text-dim">
                        <span className="mt-2 h-px w-3 flex-shrink-0 bg-accent" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {job.tags.map((t) => (
                      <span
                        key={t}
                        className="border border-line px-2.5 py-1 font-mono text-[11px] text-dim"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <motion.span
                  className="absolute bottom-0 left-0 hidden h-px bg-line sm:block"
                  initial={{ width: '0%' }}
                  whileInView={{ width: '100%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
