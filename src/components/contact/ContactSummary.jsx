import contactInfo from "../../data/contactInfo";

function ContactSummary() {
  return (
    <section className="bg-white py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">

          <p className="font-semibold uppercase tracking-[0.3em] text-blue-700">
            Corporate Information
          </p>

          <h2 className="mt-5 text-5xl font-bold text-slate-900">
            Connect With Our Global Trade Desk
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Whether you're sourcing full container loads or requesting technical
            product specifications, our commercial team is ready to assist your
            procurement department.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {contactInfo.map((item) => {
  let href = "#";

  if (item.title === "Direct Sourcing Hotline") {
    href = "tel:+31649063119";
  }

  if (item.title === "WhatsApp Business") {
    href = "https://wa.me/31649063119";
  }

  return (
    <a
      key={item.id}
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className={`rounded-3xl border bg-white p-8 shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl ${
        item.title === "Direct Sourcing Hotline" ||
        item.title === "WhatsApp Business"
          ? "border-blue-600"
          : "border-slate-200"
      }`}
    >
      <div className="mb-5 text-5xl">
        {item.icon}
      </div>

      <h3 className="text-2xl font-bold">
        {item.title}
      </h3>

      <p className="mt-4 text-lg text-gray-600">
        {item.value}
      </p>

      {(item.title === "Direct Sourcing Hotline" ||
        item.title === "WhatsApp Business") && (
        <p className="mt-4 font-semibold text-blue-700">
          Click to Contact →
        </p>
      )}
    </a>
  );
})}
        </div>

      </div>

    </section>
  );
}

export default ContactSummary;