import serviceCoverage from "../../data/serviceCoverage";

function ServiceCoverage() {
  return (
    <section className="bg-slate-100 py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">

          <p className="font-semibold uppercase tracking-[0.3em] text-blue-700">
            Global Operations
          </p>

          <h2 className="mt-4 text-5xl font-bold text-slate-900">
            Worldwide Commercial Service Coverage
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Our sourcing, logistics, and customer support teams coordinate
            international seafood exports through a structured cold-chain network,
            helping customers receive consistent quality and dependable delivery.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {serviceCoverage.map((item) => (

            <div
              key={item.id}
              className="rounded-3xl bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
            >

              <div className="text-5xl">
                {item.icon}
              </div>

              <h3 className="mt-6 text-2xl font-bold text-slate-900">
                {item.title}
              </h3>

              <ul className="mt-6 space-y-3">

                {item.items.map((value, index) => (

                  <li
                    key={index}
                    className="text-gray-600"
                  >
                    • {value}
                  </li>

                ))}

              </ul>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default ServiceCoverage;