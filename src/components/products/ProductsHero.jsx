function ProductsHero() {

  return (

    <section
      className="relative h-[60vh] bg-cover bg-center"
      style={{
        backgroundImage:
          "url('/images/products/products-banner.jpg')",
      }}
    >

      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative flex h-full items-center justify-center px-6 text-center">

        <div>

          <h1 className="text-6xl font-bold text-white">

            Premium Commercial Salmon

          </h1>

          <p className="mt-8 max-w-3xl text-xl text-gray-200">

            Wholesale Atlantic and Pacific Salmon
            supplied in Full Container Loads (FCL)
            for processors, distributors, retailers,
            and hospitality businesses worldwide.

          </p>

        </div>

      </div>

    </section>

  );

}

export default ProductsHero;