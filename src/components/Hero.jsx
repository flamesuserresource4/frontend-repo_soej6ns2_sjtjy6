import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/80" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-start gap-6 px-6 py-24 sm:py-28 md:py-32 lg:py-40">
        <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-medium tracking-wide text-white/80 ring-1 ring-white/15 backdrop-blur">
          Tech & Strategy Agency
        </span>
        <h1 className="max-w-4xl text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl">
          From Business Problems to Measurable Results.
        </h1>
        <p className="max-w-2xl text-base text-white/80 sm:text-lg">
          We don’t just build technology. We find the highest-impact projects for your business — and deliver them end-to-end.
        </p>
        <div className="mt-2">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-white/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
            aria-label="Start Your ROI Audit"
          >
            Start Your ROI Audit →
          </a>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-6 flex justify-center">
        <div className="flex items-center gap-2 text-xs text-white/70">
          <span className="h-3 w-3 animate-pulse rounded-full bg-white/70" />
          <span>Scroll</span>
        </div>
      </div>
    </section>
  );
}
