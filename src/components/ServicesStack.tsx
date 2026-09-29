import ScrollStack, { ScrollStackItem } from './ScrollStack';
import { services } from '../data/content';

export default function ServicesStack() {
  return (
    <ScrollStack
      useWindowScroll
      itemDistance={60}
      itemStackDistance={24}
      itemScale={0.03}
      baseScale={0.9}
      stackPosition="22%"
      scaleEndPosition="12%"
    >
      {services.map((s) => (
        <ScrollStackItem
          key={s.num}
          itemClassName="bg-paper border-2 border-ink overflow-hidden !p-0"
        >
          <div className="grid h-full grid-cols-1 md:grid-cols-2">
            {/* text */}
            <div className="flex flex-col justify-between p-7 md:p-9">
              <div>
                <span className="font-mono text-xs uppercase tracking-[0.12em] text-grey-40">
                  {s.num} · Service
                </span>
                <h3 className="h-display mt-2 text-[clamp(2rem,4vw,3.2rem)]">{s.name}</h3>
                <p className="mt-3 max-w-[40ch] text-grey-60">{s.blurb}</p>
              </div>
              <div>
                <ul className="mb-4 flex flex-wrap gap-2">
                  {(s.tags ?? s.items).slice(0, 4).map((t) => (
                    <li
                      key={t}
                      className="rounded-full bg-grey-05 px-3 py-1.5 font-mono text-[0.68rem] uppercase tracking-[0.04em] text-grey-60"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
                <a href={s.href ?? '/services'} className="btn btn-tertiary !px-0">
                  <span className="txt">Explore {s.name}</span> <span className="arw">→</span>
                </a>
              </div>
            </div>

            {/* image */}
            <div className="relative hidden bg-grey-05 md:block">
              {s.image && (
                <img
                  src={s.image}
                  alt={s.name}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              )}
            </div>
          </div>
        </ScrollStackItem>
      ))}
    </ScrollStack>
  );
}
