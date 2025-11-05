import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        {/* Contact / CTA */}
        <div id="contact" className="mb-10 rounded-2xl bg-gray-50 p-6 ring-1 ring-gray-200">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <div>
              <h3 className="text-lg font-semibold tracking-tight text-gray-900">Start Your ROI Audit</h3>
              <p className="mt-1 text-sm text-gray-600">Tell us your goals. We’ll map the highest-impact path and the fastest way to prove it.</p>
            </div>
            <a
              href="mailto:hello@adityaandaditya.com?subject=ROI%20Audit%20Request"
              className="inline-flex items-center rounded-md bg-black px-5 py-3 text-sm font-semibold text-white transition hover:bg-black/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-black/50"
            >
              Email Us →
            </a>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-black text-white">A²</div>
            <div className="text-sm font-semibold text-gray-900">ADITYA & ADITYA</div>
          </div>

          <nav aria-label="Footer navigation" className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
            <a href="#work" className="hover:text-gray-900">Work</a>
            <a href="#philosophy" className="hover:text-gray-900">Philosophy</a>
            <a href="#contact" className="hover:text-gray-900">Contact</a>
          </nav>
        </div>

        <div className="mt-6 text-xs text-gray-500">© {new Date().getFullYear()} ADITYA & ADITYA. All rights reserved.</div>
      </div>
    </footer>
  );
}
