function AboutHero() {
  return (
    <section
      className="relative h-[60vh] bg-cover bg-center"
      style={{
        backgroundImage:
          "url('/images/about/about-banner.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-slate-950/70"></div>

      <div className="relative flex h-full items-center justify-center px-6 text-center">

        <div>

          <h1 className="text-6xl font-bold text-white">
            Our History & Global Sourcing Network
          </h1>

          <p className="mt-8 max-w-3xl text-xl text-gray-200">

            Fourteen years of trusted wholesale salmon sourcing,
            cold-chain logistics, and international seafood
            distribution.

          </p>

        </div>

      </div>

    </section>
  );
}

export default AboutHero;