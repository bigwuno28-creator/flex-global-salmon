import { Link } from "react-router-dom";

function ProductCard({ product, onViewDetails }) {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-white shadow-lg transition duration-500 hover:-translate-y-3 hover:shadow-2xl">

      <img
        src={product.image}
        alt={product.name}
        loading="lazy"
        decoding="async"
        className="w-full h-72 object-cover rounded-2xl"
      />
      <div className="absolute left-5 top-5 z-10 flex flex-col gap-2">

  <span className="rounded-full bg-blue-700 px-4 py-1 text-sm font-semibold text-white">
    {product.badge}
  </span>

  <span className="rounded-full bg-emerald-600 px-4 py-1 text-sm font-semibold text-white">
    {product.type}
  </span>

</div>

      <div className="p-8">

        <h3 className="text-2xl font-bold text-slate-900">
          {product.name}
        </h3>

        <p className="mt-4 leading-7 text-gray-600">
          {product.description}
        </p>

        <div className="mt-6 space-y-3">

  <div>

  <strong>Origin:</strong>

  <div className="mt-2 flex flex-wrap gap-2">

    {product.origin.map((country) => (

      <span
        key={country}
        className="rounded-full bg-slate-100 px-3 py-1 text-sm"
      >
        {country}
      </span>

    ))}

  </div>

</div>
          <p>
            <strong>Available Sizes:</strong>{" "}
            {product.sizes.join(", ")}
          </p>

          <p>
            <strong>Freezing:</strong>{" "}
            {product.freezing}
          </p>

          <p>
            <strong>Storage:</strong>{" "}
            {product.storage}
          </p>

          <p>
            <strong>MOQ:</strong>{" "}
            {product.moq}
          </p>

          <div className="mt-6 border-t pt-6">

  <p className="text-sm uppercase tracking-widest text-gray-500">
    Pricing
  </p>

  <p className="mt-2 text-2xl font-bold text-blue-700">
    {product.price}
  </p>

</div>
        </div>

        <button
          onClick={onViewDetails}
          className="mb-4 w-full rounded-lg border border-blue-700 px-6 py-3 font-semibold text-blue-700 transition hover:bg-blue-700 hover:text-white"
        >
          View Details
        </button>

        <Link
          to="/contact"
          className="mt-8 inline-block rounded-lg bg-blue-700 px-6 py-3 font-semibold text-white transition hover:bg-blue-800"
        >
          Request Quote
        </Link>

      </div>

    </div>
  );
}

export default ProductCard;