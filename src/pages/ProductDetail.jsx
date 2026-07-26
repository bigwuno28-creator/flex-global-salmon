import { Link, useParams } from "react-router-dom";
import productDetails from "../data/productDetails";

function ProductDetail() {
  const { slug } = useParams();

  const product = productDetails.find(
    (item) => item.slug === slug
  );

  if (!product) {
    return (
      <div className="flex min-h-screen items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-900">
            Product Not Found
          </h1>

          <p className="mt-4 text-gray-600">
            The product you are looking for does not exist.
          </p>

          <Link
            to="/products"
            className="mt-8 inline-block rounded-xl bg-blue-700 px-6 py-3 text-white transition hover:bg-blue-800"
          >
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="bg-slate-50">

      {/* Hero */}

      <section className="bg-white py-16 shadow-sm">

        <div className="mx-auto max-w-7xl px-6">

          <Link
            to="/products"
            className="text-blue-700 hover:underline"
          >
            ← Back to Products
          </Link>

          <div className="mt-10 grid items-center gap-12 lg:grid-cols-2">

            <img
              src={product.image}
              alt={product.name}
              className="w-full rounded-3xl shadow-xl"
            />

            <div>

              <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
                Premium Export Product
              </span>

              <h1 className="mt-6 text-5xl font-bold text-slate-900">
                {product.name}
              </h1>

              <p className="mt-2 italic text-gray-500">
                {product.scientificName}
              </p>

              <p className="mt-8 text-lg leading-8 text-gray-700">
                {product.description}
              </p>

              <div className="mt-10 flex gap-4">

                <a
                  href="/contact"
                  className="rounded-xl bg-blue-700 px-8 py-4 font-semibold text-white transition hover:bg-blue-800"
                >
                  Request Quote
                </a>

                <Link
                  to="/contact"
                  className="rounded-xl border border-slate-300 px-8 py-4 font-semibold transition hover:bg-slate-100"
                >
                  Contact Sales
                </Link>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Specifications */}

      <section className="bg-slate-50 py-20">

  <div className="mx-auto max-w-7xl px-6">

    <h2 className="mb-12 text-4xl font-bold">
      Product Specifications
    </h2>

    <div className="overflow-hidden rounded-3xl bg-white shadow-xl">

      <table className="w-full">

        <tbody>

          <SpecRow
            label="Species"
            value={product.specifications.species}
          />

          <SpecRow
            label="Processing"
            value={product.specifications.processing}
          />

          <SpecRow
            label="Grade"
            value={product.specifications.grade}
          />

          <SpecRow
            label="Packaging"
            value={product.specifications.packaging}
          />

          <SpecRow
            label="Storage"
            value={product.specifications.storage}
          />

          <SpecRow
            label="Shelf Life"
            value={product.specifications.shelfLife}
          />

          <SpecRow
            label="Origin"
            value={product.origin}
          />

        </tbody>

      </table>

    </div>

  </div>

</section>
 
<section className="py-20">

  <div className="mx-auto max-w-7xl px-6">

    <h2 className="mb-8 text-4xl font-bold">

      Available Sizes

    </h2>

    <div className="flex flex-wrap gap-4">

      {product.sizes.map((size) => (

        <div
          key={size}
          className="rounded-full bg-blue-100 px-6 py-3 font-semibold text-blue-800"
        >

          {size}

        </div>

      ))}

    </div>

  </div>

</section>

<section className="bg-white py-20">

  <div className="mx-auto max-w-7xl px-6">

    <h2 className="mb-8 text-4xl font-bold">

      Certifications

    </h2>

    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

      {product.certifications.map((cert) => (

        <div
          key={cert}
          className="rounded-2xl border bg-slate-50 p-8 text-center shadow"
        >

          <h3 className="text-xl font-bold">

            {cert}

          </h3>

        </div>

      ))}

    </div>

  </div>

</section>

<section className="py-20">

  <div className="mx-auto max-w-7xl px-6">

    <h2 className="mb-8 text-4xl font-bold">

      Export Markets

    </h2>

    <div className="flex flex-wrap gap-4">

      {product.markets.map((country) => (

        <span
          key={country}
          className="rounded-full bg-slate-200 px-6 py-3"
        >

          {country}

        </span>

      ))}

    </div>

  </div>

</section>

    </main>
  );
}

function SpecRow({ label, value }) {
  return (
    <tr className="border-b">

      <td className="bg-slate-100 p-5 font-semibold">
        {label}
      </td>

      <td className="p-5">
        {value}
      </td>

    </tr>
  );
}
export default ProductDetail;