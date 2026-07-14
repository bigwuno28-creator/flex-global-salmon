import company from "../../data/company";

function CompanyHistory() {
  return (
    <section className="bg-white py-24">

      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

        <div>

          <img
            src="/images/about/company-history.jpg"
            alt="Company History"
            className="rounded-3xl shadow-xl w-full"
          />

        </div>

        <div>

          <p className="font-semibold uppercase tracking-widest text-blue-700">
            Our Story
          </p>

          <h2 className="mt-4 text-5xl font-bold text-slate-900">
            {company.historyTitle}
          </h2>

          {company.history.map((paragraph, index) => (
            <p
              key={index}
              className="mt-6 leading-8 text-gray-600"
            >
              {paragraph}
            </p>
          ))}

          <div className="mt-10 grid grid-cols-3 gap-6">

            <div className="rounded-xl bg-slate-100 p-6 text-center">

              <h3 className="text-3xl font-bold text-blue-700">
                {company.founded}
              </h3>

              <p className="mt-2 text-sm text-gray-600">
                Experience
              </p>

            </div>

            <div className="rounded-xl bg-slate-100 p-6 text-center">

              <h3 className="text-3xl font-bold text-blue-700">
                {company.employees}
              </h3>

              <p className="mt-2 text-sm text-gray-600">
                Specialists
              </p>

            </div>

            <div className="rounded-xl bg-slate-100 p-6 text-center">

              <h3 className="text-3xl font-bold text-blue-700">
                {company.countries}
              </h3>

              <p className="mt-2 text-sm text-gray-600">
                Countries
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default CompanyHistory;