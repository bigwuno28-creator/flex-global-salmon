import { Link } from "react-router-dom";

function ProductsCTA() {
  return (
    <section className="bg-gradient-to-r from-blue-900 to-slate-900 py-24">

      <div className="mx-auto max-w-5xl px-6 text-center">

        <h2 className="text-5xl font-bold text-white">
          Need a Complete Product Catalogue?
        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-blue-100">
          Download our latest wholesale salmon catalogue featuring product
          specifications, packaging formats, certifications, and export
          information. If you require pricing or volume allocations, our team
          will be happy to prepare a tailored commercial quotation.
        </p>

        <div className="mt-12 flex flex-col items-center justify-center gap-6 md:flex-row">

          <a
            href="/documents/product-catalogue.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-white px-8 py-4 text-lg font-semibold text-blue-900 transition hover:bg-slate-100"
          >
            Download Catalogue
          </a>

          <Link
            to="/contact"
            className="rounded-lg border-2 border-white px-8 py-4 text-lg font-semibold text-white transition hover:bg-white hover:text-blue-900"
          >
            Request Commercial Quote
          </Link>

        </div>

      </div>

    </section>
  );
}

export default ProductsCTA;