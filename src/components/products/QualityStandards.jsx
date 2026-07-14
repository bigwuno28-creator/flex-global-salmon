import specifications from "../../data/specifications";

function QualityStandards() {
  return (
    <section className="bg-slate-50 py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">

          <p className="font-semibold uppercase tracking-widest text-blue-700">
            Quality Assurance
          </p>

          <h2 className="mt-4 text-5xl font-bold">
            International Quality Standards
          </h2>

        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {specifications.certifications.map((item) => (

            <div
              key={item}
              className="rounded-2xl bg-white p-10 text-center shadow-lg transition hover:-translate-y-2 hover:shadow-xl"
            >

              <h3 className="text-3xl font-bold text-blue-700">
                {item}
              </h3>

              <p className="mt-4 text-gray-600">
                Internationally recognized food safety and quality standard.
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default QualityStandards;