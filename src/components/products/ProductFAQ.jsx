import { useState } from "react";
import { Link } from "react-router-dom";
import faq from "../../data/faq";

function ProductFAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-5xl px-6">

        <div className="mb-16 text-center">

          <p className="font-semibold uppercase tracking-widest text-blue-700">
            Frequently Asked Questions
          </p>

          <h2 className="mt-4 text-5xl font-bold text-slate-900">
            Procurement Questions
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
            Find answers to the most common questions about our products,
            logistics, certifications, and commercial supply process.
          </p>

        </div>

        <div className="space-y-5">

          {faq.map((item) => (

            <div
              key={item.id}
              className="rounded-2xl border border-slate-200 shadow-sm"
            >

              <button
                onClick={() =>
                  setOpen(open === item.id ? null : item.id)
                }
                className="flex w-full items-center justify-between p-6 text-left"
              >

                <span className="text-xl font-semibold">
                  {item.question}
                </span>

                <span className="text-3xl font-bold text-blue-700">
                  {open === item.id ? "−" : "+"}
                </span>

              </button>

              {open === item.id && (

                <div className="border-t border-slate-200 p-6 text-gray-600 leading-8">

                  {item.answer}

                </div>

              )}

            </div>

          ))}

        </div>

        <div className="mt-20 rounded-3xl bg-blue-900 p-12 text-center">

          <h3 className="text-4xl font-bold text-white">
            Still Have Questions?
          </h3>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-blue-100">
            Our commercial sourcing team is ready to assist with quotations,
            product specifications, and international shipping requirements.
          </p>

          <Link
            to="/contact"
            className="mt-10 inline-block rounded-xl bg-white px-8 py-4 font-semibold text-blue-900 transition hover:bg-slate-100"
          >
            Contact Our Team
          </Link>

        </div>

      </div>
    </section>
  );
}

export default ProductFAQ;