import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

function Metrics() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const metrics = [
    {
      number: 14,
      suffix: "+",
      label: "Years of Global Supply Chain Excellence",
    },
    {
      number: 298,
      suffix: "",
      label: "Specialist Cold-Chain & Sourcing Personnel",
    },
    {
      number: 29,
      suffix: "+",
      label: "Countries in Our Active Distribution Network",
    },
    {
      number: -18,
      suffix: "°C",
      label: "Continuous Temperature-Controlled Integrity",
    },
  ];

  return (
    <section className="bg-white py-20" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {metrics.map((metric, index) => (

            <div
              key={index}
              className="rounded-2xl bg-slate-50 shadow-md p-8 text-center hover:shadow-xl transition"
            >

              <h2 className="text-5xl font-bold text-blue-900">

                {metric.number}
                {metric.suffix}

              </h2>

              <p className="mt-4 text-gray-600 leading-7">
                {metric.label}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Metrics;