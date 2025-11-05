import React from 'react';

export default function Philosophy() {
  return (
    <section id="philosophy" className="relative w-full bg-white py-20 text-gray-900">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">The ADITYA & ADITYA Philosophy</h2>
          <p className="mt-3 text-sm text-gray-600">
            Calling out to all Adityas. Let’s build something. #AdityaSquared
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-gray-50">
          <div className="aspect-video w-full">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/2Ji-clqUYnA"
              title="Our Philosophy — ADITYA & ADITYA"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
