import ProductCard from "../ProductCard";
import products from "../../data/products";

function FeaturedProducts() {
  return (
    <section className="bg-white py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">

          <h2 className="text-4xl font-bold text-slate-900">
            Premium Commercial Salmon Products
          </h2>

          <p className="mt-6 text-lg text-gray-600">

            Industrial-grade salmon sourced from the world's
            leading aquaculture regions.

          </p>

        </div>

        <div className="grid gap-10 md:grid-cols-2">

          {products.map((product) => (

            <ProductCard
              key={product.id}
              product={product}
            />

          ))}

        </div>

      </div>

    </section>
  );
}

export default FeaturedProducts;