import { Link } from "react-router-dom";
import {
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

import contact from "../../data/contact";

function AboutCTA() {
  return (
    <section className="bg-gradient-to-r from-blue-900 to-slate-900 py-24">

      <div className="mx-auto max-w-5xl px-6 text-center">

        <h2 className="text-5xl font-bold text-white">

          Ready to Start a Long-Term Supply Partnership?

        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-blue-100">

          Flex Global Salmon works with processors,
          wholesalers, distributors, supermarket chains,
          and hospitality businesses across international
          markets. Let us help secure your wholesale
          salmon supply requirements.

        </p>

        <div className="mt-12 flex flex-col items-center justify-center gap-6 md:flex-row">

          <div className="flex items-center gap-3 text-white">

            <MapPinIcon className="h-6 w-6" />

            <span>{contact.headquarters}</span>

          </div>

          <div className="flex items-center gap-3 text-white">

            <PhoneIcon className="h-6 w-6" />

            <span>{contact.phone}</span>

          </div>

        </div>

        <div className="mt-12 flex flex-col items-center justify-center gap-6 md:flex-row">

          <Link
            to="/contact"
            className="rounded-lg bg-white px-8 py-4 text-lg font-semibold text-blue-900 transition hover:bg-slate-100"
          >
            Request Commercial Quote
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

export default AboutCTA;