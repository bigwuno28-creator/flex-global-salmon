import specifications from "../../data/specifications";

function TechnicalTable() {
  return (
    <section className="bg-white py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">

          <p className="font-semibold uppercase tracking-widest text-blue-700">
            Technical Specifications
          </p>

          <h2 className="mt-4 text-5xl font-bold text-slate-900">
            Enterprise Procurement Standards
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
            Our products are handled under strict quality assurance and
            international cold-chain standards to support global wholesale
            distribution.
          </p>

        </div>

        <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-lg">

          <table className="w-full">

            <tbody>

              <tr className="border-b">

                <td className="bg-slate-50 p-6 font-semibold">
                  Minimum Order Quantity
                </td>

                <td className="p-6">
                  {specifications.moq}
                </td>

              </tr>

              <tr className="border-b">

                <td className="bg-slate-50 p-6 font-semibold">
                  Storage Temperature
                </td>

                <td className="p-6">
                  {specifications.storage}
                </td>

              </tr>

              <tr className="border-b">

                <td className="bg-slate-50 p-6 font-semibold">
                  Trade Terms
                </td>

                <td className="p-6">
                  {specifications.tradeTerms.join(" / ")}
                </td>

              </tr>

              <tr>

                <td className="bg-slate-50 p-6 font-semibold">
                  Certifications
                </td>

                <td className="p-6">
                  {specifications.certifications.join(", ")}
                </td>

              </tr>

            </tbody>

          </table>

        </div>

      </div>

    </section>
  );
}

export default TechnicalTable;