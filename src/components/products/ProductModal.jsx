import { Link } from "react-router-dom";

function ProductModal({ product, onClose }) {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6">

      <div className="max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-3xl bg-white">

        <img
          src={product.image}
          alt={product.name}
          className="h-96 w-full object-cover"
        />

        <div className="p-10">

          <span className="rounded-full bg-blue-700 px-4 py-2 text-sm font-semibold text-white">
            {product.badge}
          </span>

          <h2 className="mt-6 text-4xl font-bold">
            {product.name}
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            {product.description}
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">

            <div>
              <strong>Origin</strong>
              <p>{product.origin.join(", ")}</p>
            </div>

            <div>
              <strong>Sizes</strong>
              <p>{product.sizes.join(", ")}</p>
            </div>

            <div>
              <strong>Packaging</strong>
              <p>{product.packaging}</p>
            </div>

            <div>
              <strong>Freezing</strong>
              <p>{product.freezing}</p>
            </div>

            <div>
              <strong>Storage</strong>
              <p>{product.storage}</p>
            </div>

            <div>
              <strong>MOQ</strong>
              <p>{product.moq}</p>
            </div>

            <div>
              <strong>Shelf Life</strong>
              <p>{product.shelfLife}</p>
            </div>

            <div>
              <strong>Availability</strong>
              <p>{product.availability}</p>
            </div>

            <div>
              <strong>Trade Terms</strong>
              <p>{product.tradeTerms}</p>
            </div>

          </div>

          <div className="mt-10">

            <strong>Certifications</strong>

            <div className="mt-4 flex flex-wrap gap-3">

              {product.certifications.map((item) => (

                <span
                  key={item}
                  className="rounded-full bg-slate-100 px-4 py-2"
                >
                  {item}
                </span>

              ))}

            </div>

          </div>

          <div className="mt-12 flex flex-wrap gap-5">

            <Link
              to="/contact"
              className="rounded-xl bg-blue-700 px-8 py-4 font-semibold text-white hover:bg-blue-800"
            >
              Request Quote
            </Link>

            <button
              onClick={onClose}
              className="rounded-xl border px-8 py-4 hover:bg-gray-100"
            >
              Close
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default ProductModal;