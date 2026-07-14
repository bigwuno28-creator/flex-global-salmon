function ProductCard({ product }) {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

      <img
        src={product.image}
        alt={product.name}
        loading="lazy"
        decoding="async"
        className="w-full h-72 object-cover rounded-2xl"
      />
      <div className="p-6">

        <h3 className="text-2xl font-bold text-slate-900">
          {product.name}
        </h3>

        <p className="mt-3 text-gray-600">
          {product.description}
        </p>

        <div className="mt-5 space-y-2">

          <p>
            <strong>Origin:</strong> {product.origin}
          </p>

          <p>
            <strong>Available Sizes:</strong> {product.sizes}
          </p>

          <p>
            <strong>Freezing:</strong> {product.freezing}
          </p>

        </div>

        <div className="mt-6 flex items-center justify-between">

          <span className="text-2xl font-bold text-blue-700">
            {product.price}
          </span>

          <button className="rounded-lg bg-blue-700 px-5 py-3 text-white transition hover:bg-blue-800">
            View Details
          </button>

        </div>

      </div>

    </div>
  );
}

export default ProductCard;