import {
  GlobeEuropeAfricaIcon,
  TruckIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

function ValuePillars() {
  const pillars = [
    {
      title: "Institutional Sourcing",
      description:
        "Unrivaled access to top-tier, certified aquaculture facilities across Norway, Chile, and Scotland.",
      icon: GlobeEuropeAfricaIcon,
    },
    {
      title: "Agile Logistics (The Flex Advantage)",
      description:
        "Rapid, adaptive shipping routes ensuring guaranteed delivery timelines to major Asian and global ports.",
      icon: TruckIcon,
    },
    {
      title: "Rigorous Quality Verification",
      description:
        "Every shipment undergoes exhaustive independent inspection (SGS, HACCP) prior to port departure.",
      icon: ShieldCheckIcon,
    },
  ];

  return (
    <section className="bg-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900">
            Why Global Buyers Choose Flex Global Salmon
          </h2>

          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Our global sourcing network, reliable logistics, and strict quality
            standards ensure every shipment meets the expectations of industrial
            processors, distributors, and hospitality groups.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;

            return (
              <div
                key={index}
                className="rounded-2xl bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="mb-6 inline-flex rounded-full bg-blue-100 p-4">
                  <Icon className="h-10 w-10 text-blue-700" />
                </div>

                <h3 className="mb-4 text-2xl font-bold text-slate-900">
                  {pillar.title}
                </h3>

                <p className="leading-8 text-gray-600">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ValuePillars;