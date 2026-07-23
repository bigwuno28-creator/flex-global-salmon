import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

      <img
        src={product.image}
        alt={product.name}
        loading="lazy"
        decoding="async"
        className="h-72 w-full object-cover"
      />

      <div className="p-6">

        <h3 className="text-2xl font-bold text-slate-900">
          {product.name}
        </h3>

        <p className="mt-3 text-gray-600 leading-7">
          {product.description}
        </p>

        <div className="mt-6 space-y-5">

          {/* Origin */}

          <div>

            <p className="font-semibold text-slate-800">
              Origin
            </p>

            <div className="mt-2 flex flex-wrap gap-2">

              {product.origin.map((country) => (
                <span
                  key={country}
                  className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700"
                >
                  {country}
                </span>
              ))}

            </div>

          </div>

          {/* Available Sizes */}

          <div>

            <p className="font-semibold text-slate-800">
              Available Sizes
            </p>

            <div className="mt-2 flex flex-wrap gap-2">

              {product.sizes.map((size) => (
                <span
                  key={size}
                  className="rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700"
                >
                  {size}
                </span>
              ))}

            </div>

          </div>

          {/* Freezing */}

          <p>
            <strong>Freezing:</strong> {product.freezing}
          </p>

        </div>

        <div className="mt-8 flex items-center justify-between">

          <span className="text-2xl font-bold text-blue-700">
            {product.price}
          </span>

          <Link
            to={`/products/${product.slug}`}
            className="rounded-xl bg-blue-700 px-6 py-3 font-semibold text-white transition hover:bg-blue-800"
          >
            View Details
          </Link>
        </div>

      </div>

    </div>
  );
}

export default ProductCard;