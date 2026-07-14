import { useState } from "react";
import ProductModal from "./ProductModal";

import products from "../../data/products";
import categories from "../../data/categories";

import ProductCard from "./ProductCard";

function ProductGrid() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter(
          (product) => product.category === selectedCategory
        );

  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center mb-16">

          <p className="uppercase tracking-widest font-semibold text-blue-700">
            Product Catalogue
          </p>

          <h2 className="mt-4 text-5xl font-bold">
            Premium Commercial Salmon Products
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
            Browse our wholesale salmon products for processors,
            distributors, retailers, and hospitality businesses.
          </p>

        </div>

        <div className="mb-14 flex flex-wrap justify-center gap-4">

          {categories.map((category) => (

            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.value)}
              className={`rounded-full px-6 py-3 font-semibold transition ${
                selectedCategory === category.value
                  ? "bg-blue-700 text-white shadow-lg"
                  : "bg-white text-slate-700 hover:bg-blue-100"
              }`}
            >
              {category.name}
            </button>

          ))}

        </div>

        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">

          {filteredProducts.map((product) => (

            <ProductCard
              key={product.id}
              product={product}
              onViewDetails={() => setSelectedProduct(product)}
            />

          ))}

        </div>

           <ProductModal
              product={selectedProduct}
              onClose={() => setSelectedProduct(null)}
            />


      </div>
    </section>
  );
}

export default ProductGrid;