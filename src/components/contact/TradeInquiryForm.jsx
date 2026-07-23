import { useState } from "react";
import emailjs from "@emailjs/browser";

function TradeInquiryForm() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    country: "",
    email: "",
    phone: "",
    product: "",
    volume: "",
    port: "",
    message: "",
    agree: false,
  });

function handleChange(e) {
  const { name, value, type, checked } = e.target;

  setForm((prev) => ({
    ...prev,
    [name]: type === "checkbox" ? checked : value,
  }));
}

  async function handleSubmit(e) {
  e.preventDefault();

  if (!form.agree) {
    alert("Please accept the agreement before submitting.");
    return;
  }

  try {
    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        name: form.name,
        company: form.company,
        country: form.country,
        email: form.email,
        phone: form.phone,
        product: form.product,
        volume: form.volume,
        port: form.port,
        message: form.message,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );

    alert(
      "Thank you. Your commercial inquiry has been submitted successfully."
    );

    setForm({
      name: "",
      company: "",
      country: "",
      email: "",
      phone: "",
      product: "",
      volume: "",
      port: "",
      message: "",
      agree: false,
    });
  } catch (error) {
    console.error(error);

    alert(
      "Unable to send your inquiry at the moment. Please try again."
    );
  }
}

return (
    <section
      id="trade-form"
      className="bg-slate-50 py-24"
    >
      <div className="mx-auto max-w-5xl px-6">

        <div className="mb-14 text-center">

          <h2 className="text-5xl font-bold">
            Commercial Trade Inquiry
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            Complete the form below and our sourcing
            specialists will respond within 12 business
            hours.
          </p>

        </div>

        <form
  onSubmit={handleSubmit}
  className="rounded-3xl bg-white p-10 shadow-xl"
>
  <div className="grid gap-8 md:grid-cols-2">

    <input
      type="text"
      name="name"
      value={form.name}
      onChange={handleChange}
      placeholder="Full Name & Corporate Title"
      className="rounded-xl border p-4"
      required
    />

    <input
      type="text"
      name="company"
      value={form.company}
      onChange={handleChange}
      placeholder="Registered Company Name"
      className="rounded-xl border p-4"
      required
    />

    <input
      type="text"
      name="country"
      value={form.country}
      onChange={handleChange}
      placeholder="Country of Operation"
      className="rounded-xl border p-4"
      required
    />

    <input
      type="email"
      name="email"
      value={form.email}
      onChange={handleChange}
      placeholder="Corporate Email Address"
      className="rounded-xl border p-4"
      required
    />

    <input
      type="text"
      name="phone"
      value={form.phone}
      onChange={handleChange}
      placeholder="Phone / WhatsApp"
      className="rounded-xl border p-4"
    />

    <select
      name="product"
      value={form.product}
      onChange={handleChange}
      className="rounded-xl border p-4"
      required
    >
      <option value="">Target Product</option>
      <option value="HON Salmon">HON Salmon</option>
      <option value="Salmon Fillets">Salmon Fillets</option>
      <option value="Salmon Portions">Salmon Portions</option>
      <option value="Salmon Roe">Salmon Roe</option>
      <option value="Frozen Salmon Heads">Frozen Salmon Heads</option>
      <option value="Salmon Belly">Salmon Belly</option>
      <option value="Salmon Steaks">Salmon Steaks</option>
    </select>

    <select
      name="volume"
      value={form.volume}
      onChange={handleChange}
      className="rounded-xl border p-4"
      required
    >
      <option value="">Requested Monthly Volume</option>
      <option value="1–5 FCL">1–5 FCL</option>
      <option value="5–10 FCL">5–10 FCL</option>
      <option value="10+ FCL">10+ FCL</option>
    </select>

    <input
      type="text"
      name="port"
      value={form.port}
      onChange={handleChange}
      placeholder="Destination Port"
      className="rounded-xl border p-4"
      required
    />

  </div>

  <textarea
    name="message"
    value={form.message}
    onChange={handleChange}
    rows={6}
    placeholder="Additional Requirements"
    className="mt-8 w-full rounded-xl border p-4"
  />

  <label className="mt-8 flex items-center gap-3">

    <input
      type="checkbox"
      name="agree"
      checked={form.agree}
      onChange={handleChange}
      required
    />

    I agree to be contacted regarding my inquiry.

  </label>

  <button
    type="submit"
    className="mt-10 rounded-xl bg-blue-700 px-10 py-4 font-semibold text-white transition hover:bg-blue-800"
  >
    Submit Inquiry
  </button>

</form>

    </div>

  </section>
  );

}


export default TradeInquiryForm;