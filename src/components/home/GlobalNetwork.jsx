function GlobalNetwork() {
  return (
    <section
      className="relative py-28 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('/images/about/world-map.png')",
      }}
    >
      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-slate-950/80"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        <div className="text-center">

          <h2 className="text-5xl font-bold text-white">

            Global Supply Network

          </h2>

          <p className="mt-8 text-lg text-gray-300 max-w-3xl mx-auto">

            Flex Global Salmon connects certified
            aquaculture producers with industrial
            processors and wholesale distributors
            through an efficient global cold-chain
            logistics network.

          </p>

        </div>

        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          <div className="rounded-xl bg-white/10 backdrop-blur-md p-8 text-center">

            <h3 className="text-2xl font-bold text-white">
              Norway
            </h3>

            <p className="mt-3 text-gray-300">
              Atlantic Salmon Source
            </p>

          </div>

          <div className="rounded-xl bg-white/10 backdrop-blur-md p-8 text-center">

            <h3 className="text-2xl font-bold text-white">
              Netherlands
            </h3>

            <p className="mt-3 text-gray-300">
              European Logistics Hub
            </p>

          </div>

          <div className="rounded-xl bg-white/10 backdrop-blur-md p-8 text-center">

            <h3 className="text-2xl font-bold text-white">
              China
            </h3>

            <p className="mt-3 text-gray-300">
              Distribution Market
            </p>

          </div>

          <div className="rounded-xl bg-white/10 backdrop-blur-md p-8 text-center">

            <h3 className="text-2xl font-bold text-white">
              Vietnam & Thailand
            </h3>

            <p className="mt-3 text-gray-300">
              Seafood Processing Partners
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default GlobalNetwork;