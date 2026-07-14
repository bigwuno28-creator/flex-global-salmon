import { Link } from "react-router-dom";

function ContactHero() {
  return (
    <section className="relative h-[70vh] overflow-hidden">

      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/contact.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-slate-900/75"></div>

      <div className="relative z-10 flex h-full items-center">

        <div className="mx-auto max-w-7xl px-6">

          <p className="uppercase tracking-[0.35em] text-blue-300 font-semibold">
            Global Trade Desk
          </p>

          <h1 className="mt-6 max-w-4xl text-5xl font-bold leading-tight text-white md:text-7xl">
            Request a Commercial Quote
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-slate-200">
            Connect directly with our sourcing specialists to discuss pricing,
            product specifications, shipment schedules, and long-term supply
            agreements.
          </p>

          <div className="mt-12 flex flex-wrap gap-5">

            <a
              href="#trade-form"
              className="rounded-xl bg-blue-700 px-8 py-4 font-semibold text-white transition hover:bg-blue-800"
            >
              Start Your Inquiry
            </a>

            <Link
              to="/products"
              className="rounded-xl border border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-slate-900"
            >
              Browse Products
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}

export default ContactHero;