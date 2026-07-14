function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">

      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source
          src="/videos/hero.mp4"
          type="video/mp4"
        />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex h-full items-center justify-center">

        <div className="max-w-5xl px-6 text-center text-white">

          <h1 className="text-6xl font-bold leading-tight">

            Direct Ocean-to-Market Wholesale Supply of Premium Salmon.

          </h1>

          <p className="mt-8 text-xl leading-9">

            For more than 14 years, Flex Global Salmon has engineered
            seamless cold-chain logistics, delivering premium Atlantic
            and Pacific Salmon worldwide.

          </p>

          <button
            className="mt-12 rounded-full bg-blue-700 px-10 py-5 text-lg font-semibold transition hover:bg-blue-800"
          >
            Request Technical Specifications
          </button>

        </div>

      </div>

    </section>
  );
}

export default Hero;