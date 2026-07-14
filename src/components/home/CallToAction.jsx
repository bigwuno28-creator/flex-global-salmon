import { Link } from "react-router-dom";

function CallToAction() {
  return (
    <section className="bg-blue-900 py-24">
      <div className="mx-auto max-w-5xl px-6 text-center">

        <h2 className="text-5xl font-bold text-white">
          Ready to Secure Your Next Salmon Shipment?
        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-blue-100">
          Partner with Flex Global Salmon for dependable wholesale sourcing,
          temperature-controlled logistics, and premium Atlantic and Pacific
          salmon supplied to distributors, processors, and hospitality groups
          worldwide.
        </p>

        <div className="mt-12 flex flex-col items-center justify-center gap-6 md:flex-row">

          <Link
            to="/contact"
            className="rounded-lg bg-white px-8 py-4 text-lg font-semibold text-blue-900 transition hover:bg-slate-100"
          >
            Request a Commercial Quote
          </Link>

          <Link
            to="/contact"
            className="rounded-lg border-2 border-white px-8 py-4 text-lg font-semibold text-white transition hover:bg-white hover:text-blue-900"
          >
            Contact Our Team
          </Link>

        </div>

      </div>
    </section>
  );
}

export default CallToAction;