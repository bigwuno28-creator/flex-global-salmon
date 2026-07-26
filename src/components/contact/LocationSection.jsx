function LocationSection() {
  return (
    <section className="bg-white py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">

          <p className="font-semibold uppercase tracking-[0.3em] text-blue-700">
            Global Headquarters
          </p>

          <h2 className="mt-4 text-5xl font-bold text-slate-900">
            Visit or Contact Our European Office
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
            Our headquarters in Amsterdam coordinates international procurement,
            logistics, and customer support for buyers around the world.
          </p>

        </div>

        <div className="grid gap-12 lg:grid-cols-2">

          {/* Google Map */}

          <div className="overflow-hidden rounded-3xl shadow-xl">

            <iframe
              title="Flex Global Salmon Headquarters"
              src="https://www.google.com/maps?q=Amsterdam,Netherlands&output=embed"
              width="100%"
              height="500"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

          </div>

          {/* Business Information */}

          <div className="rounded-3xl bg-slate-50 p-10 shadow-lg">

            <h3 className="text-3xl font-bold text-slate-900">
              Business Information
            </h3>

            <div className="mt-10 space-y-8">

              <div>
                <h4 className="font-semibold text-blue-700">
                  📍 European Headquarters
                </h4>

                <p className="mt-2 text-gray-600">
                  Amsterdam, The Netherlands
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-blue-700">
                  📞 Direct Hotline
                 </h4>

                 <p className="mt-2 text-gray-600">
                   +31 649063119
                 </p>
              </div>

              <div>
                <h4 className="font-semibold text-blue-700">
                  ✉️ Email
                </h4>

                <a
                  href="mailto:info@flexglobalsalmon.com"
                  className="mt-2 block text-gray-600 hover:text-blue-700 hover:underline"
                >
                  info@flexglobalsalmon.com
                </a>
             </div>

              <div>
                <h4 className="font-semibold text-blue-700">
                  🕒 Business Hours
                </h4>

                <p className="mt-2 text-gray-600">
                  Monday – Friday
                  <br />
                  08:00 – 18:00 CET
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-blue-700">
                  🌍 Service Coverage
                </h4>

                <p className="mt-2 text-gray-600">
                  Europe, Asia, Middle East,
                  North America and Africa.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-blue-700">
                  ⚡ Commercial Response
                </h4>

                <p className="mt-2 text-gray-600">
                  All inquiries answered within
                  12 business hours.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default LocationSection;