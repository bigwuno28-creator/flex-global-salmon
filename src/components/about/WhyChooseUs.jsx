import {
  ShieldCheckIcon,
  TruckIcon,
  CubeIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";

import advantages from "../../data/advantages";

const icons = [
  ShieldCheckIcon,
  TruckIcon,
  CubeIcon,
  ChatBubbleLeftRightIcon,
];

function WhyChooseUs() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">

          <p className="font-semibold uppercase tracking-widest text-blue-700">
            Why Choose Us
          </p>

          <h2 className="mt-4 text-5xl font-bold text-slate-900">
            Why Businesses Choose Flex Global Salmon
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
            We combine premium sourcing, dependable logistics, and responsive
            customer service to support long-term wholesale partnerships.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {advantages.map((item, index) => {

            const Icon = icons[index];

            return (

              <div
                key={item.id}
                className="rounded-3xl bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >

                <div className="inline-flex rounded-full bg-blue-100 p-4">

                  <Icon className="h-10 w-10 text-blue-700" />

                </div>

                <h3 className="mt-8 text-2xl font-bold">

                  {item.title}

                </h3>

                <p className="mt-5 leading-8 text-gray-600">

                  {item.description}

                </p>

              </div>

            );

          })}

        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;