import partners from "../../data/partners";

function ImportPartners() {
  return (
    <section className="bg-white py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">

          <p className="font-semibold uppercase tracking-widest text-blue-700">
            Global Network
          </p>

          <h2 className="mt-4 text-5xl font-bold text-slate-900">
            Serving International Seafood Markets
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
            Our sourcing and logistics network connects premium salmon producers
            with importers, processors, distributors, and hospitality businesses
            across key international markets.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2">

          {partners.map((partner) => (

            <div
              key={partner.id}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >

              <h3 className="text-2xl font-bold text-slate-900">
                {partner.country}
              </h3>

              <p className="mt-2 font-medium text-blue-700">
                {partner.city}
              </p>

              <h4 className="mt-6 text-xl font-semibold">
                {partner.title}
              </h4>

              <p className="mt-4 leading-8 text-gray-600">
                {partner.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default ImportPartners;