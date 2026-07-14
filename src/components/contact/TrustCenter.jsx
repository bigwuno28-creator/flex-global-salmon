import trustFeatures from "../../data/trustFeatures";

function TrustCenter() {
  return (
    <section className="bg-slate-900 py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">

          <p className="font-semibold uppercase tracking-[0.3em] text-blue-300">
            Trust & Compliance
          </p>

          <h2 className="mt-4 text-5xl font-bold text-white">
            Built for International Trade
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            We focus on dependable sourcing, disciplined logistics, and
            responsive commercial support to help wholesale buyers move products
            efficiently through global supply chains.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {trustFeatures.map((feature) => (

            <div
              key={feature.id}
              className="rounded-3xl border border-slate-700 bg-slate-800 p-8 transition hover:-translate-y-2 hover:border-blue-500 hover:shadow-2xl"
            >

              <div className="text-5xl">
                {feature.icon}
              </div>

              <h3 className="mt-6 text-2xl font-bold text-white">
                {feature.title}
              </h3>

              <p className="mt-4 leading-8 text-slate-300">
                {feature.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default TrustCenter;