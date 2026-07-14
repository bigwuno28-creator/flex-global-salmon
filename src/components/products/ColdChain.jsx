function ColdChain() {
  const steps = [
    "Harvest",
    "Processing",
    "IQF / BQF Freezing",
    "Cold Storage (-18°C)",
    "Container Loading",
    "International Shipping",
    "Customer Delivery",
  ];

  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="text-center mb-16">

          <p className="uppercase tracking-widest text-blue-700 font-semibold">
            Export Logistics
          </p>

          <h2 className="mt-4 text-5xl font-bold text-slate-900">
            Packaging & Cold-Chain Logistics
          </h2>

          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Every shipment is professionally packed and maintained under
            continuous temperature-controlled conditions to preserve freshness
            throughout international transportation.
          </p>

        </div>

        {/* Two-column layout */}

        <div className="grid gap-16 lg:grid-cols-2 items-center">

          {/* Left */}

          <div>

            <img
              src="/images/products/packaging/carton.jpg"
              alt="Export Packaging"
              className="rounded-3xl shadow-xl w-full object-cover"
            />

          </div>

          {/* Right */}

          <div>

            <h3 className="text-3xl font-bold mb-8">
              Cold-Chain Workflow
            </h3>

            <div className="space-y-6">

              {steps.map((step, index) => (

                <div
                  key={index}
                  className="flex items-center gap-5"
                >

                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-700 text-white font-bold">

                    {index + 1}

                  </div>

                  <p className="text-lg text-gray-700">

                    {step}

                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default ColdChain;