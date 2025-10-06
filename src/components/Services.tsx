import { motion } from "framer-motion";
import { container } from "../utils/animate";
import { servicesData } from "../utils/serviceData";

const Services = () => {
  return (
    <section id="services" className="max-w-6xl mx-auto px-6 py-16">
      <h3 className="text-2xl font-bold">What we do</h3>
      <p className="text-slate-600 mt-2">
        Engineering and design services tailored for growth-driven teams.
      </p>

      <motion.div
        className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={container}
      >
        {servicesData.map((s) => (
          <motion.article
            key={s.title}
            variants={{
              hidden: { opacity: 0, y: 12 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.45, ease: "easeOut" },
              },
            }}
            className="p-6 rounded-2xl border hover:shadow-md transition-shadow"
            whileHover={{
              y: -6,
              scale: 1.02,
              transition: { type: "spring", stiffness: 300, damping: 18 },
            }}
          >
            <h4 className="font-semibold text-lg">{s.title}</h4>
            <p className="mt-2 text-slate-600 text-sm">{s.desc}</p>
            <div className="mt-4">
              <a href="#contact" className="text-indigo-600 text-sm">
                Talk to us →
              </a>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
};

export default Services;
