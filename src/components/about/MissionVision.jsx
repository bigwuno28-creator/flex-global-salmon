import {
  GlobeAltIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

import company from "../../data/company";

function MissionVision() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">

          <p className="font-semibold uppercase tracking-widest text-blue-700">
            Our Purpose
          </p>

          <h2 className="mt-4 text-5xl font-bold text-slate-900">
            Guided by Purpose, Driven by Excellence
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
            Every shipment we deliver reflects our commitment to quality,
            dependable logistics, and long-term partnerships.
          </p>

        </div>

        <div className="grid gap-8 lg:grid-cols-2">

          <div className="rounded-3xl bg-white p-10 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

            <div className="inline-flex rounded-full bg-blue-100 p-4">
              <GlobeAltIcon className="h-10 w-10 text-blue-700" />
            </div>

            <h3 className="mt-8 text-3xl font-bold">
              {company.mission.title}
            </h3>

            <p className="mt-6 leading-8 text-gray-600">
              {company.mission.body}
            </p>

          </div>

          <div className="rounded-3xl bg-white p-10 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

            <div className="inline-flex rounded-full bg-green-100 p-4">
              <SparklesIcon className="h-10 w-10 text-green-700" />
            </div>

            <h3 className="mt-8 text-3xl font-bold">
              {company.vision.title}
            </h3>

            <p className="mt-6 leading-8 text-gray-600">
              {company.vision.body}
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

export default MissionVision;