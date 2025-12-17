export default function Card() {
  return (
    <div
      className="group relative max-w-sm
                 rounded-3xl border border-default/60
                 bg-neutral-primary-soft
                 shadow-sm transition-all duration-500 ease-out
                 hover:-translate-y-1 hover:shadow-2xl"
    >
      {/* IMAGE */}
      <div className="relative h-56 overflow-hidden rounded-t-3xl">
        <img
          src="/docs/images/blog/image-1.jpg"
          alt="Blog"
          className="h-full w-full object-cover
                     transition-transform duration-700 ease-out
                     group-hover:scale-110"
        />

        {/* SOFT GRADIENT */}
        <div
          className="absolute inset-0
                     bg-gradient-to-t from-black/50 via-black/20 to-transparent"
        />

        {/* FLOATING TAG */}
        <span
          className="absolute left-5 top-5
                     rounded-full bg-white/90 px-4 py-1.5
                     text-xs font-semibold text-brand
                     shadow-md backdrop-blur"
        >
          Design
        </span>
      </div>

      {/* CONTENT */}
      <div className="px-6 pt-6 pb-7">
        {/* META */}
        <p className="mb-2 text-xs font-medium uppercase tracking-wide text-body/70">
          March 12, 2025 · 5 min read
        </p>

        {/* TITLE */}
        <h5
          className="mb-3 text-[1.35rem] font-semibold leading-snug
                     text-heading transition-colors
                     group-hover:text-brand"
        >
          Streamlining your design process today.
        </h5>

        {/* DESC */}
        <p className="mb-6 text-body leading-relaxed">
          In today’s fast-paced digital landscape, fostering seamless collaboration
          among Developers and IT Operations.
        </p>

        {/* CTA */}
        <div className="flex items-center justify-between">
          <a
            href="#"
            className="group/link inline-flex items-center gap-2
                       text-sm font-semibold text-brand
                       transition-all duration-300
                       hover:gap-3"
          >
            Read more
            <svg
              className="h-4 w-4 transition-transform duration-300
                         group-hover/link:translate-x-1"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 12H5m14 0-4 4m4-4-4-4"
              />
            </svg>
          </a>

          {/* AUTHOR */}
          <div className="flex items-center gap-2">
            <img
              src="https://flowbite.com/docs/images/people/profile-picture-1.jpg"
              className="h-9 w-9 rounded-full border border-white shadow"
              alt="Author"
            />
            <span className="text-xs font-medium text-body">
              John Doe
            </span>
          </div>
        </div>
      </div>

      {/* ORGANIC GLOW */}
      <div
        className="pointer-events-none absolute -inset-1
                   rounded-[2.5rem] opacity-0 blur-2xl
                   transition-opacity duration-500
                   group-hover:opacity-100
                   bg-gradient-to-br from-brand/20 via-transparent to-transparent"
      />
    </div>
  );
}
