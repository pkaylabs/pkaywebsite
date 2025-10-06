import { motion } from "framer-motion";
import { container } from "../utils/animate";

const Testimonials = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h3 className="text-2xl font-bold">What clients say</h3>
      <motion.div
        className="mt-6 grid md:grid-cols-3 gap-6"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={container}
      >
        {[
          {
            name: "Aisha",
            quote: "Pkay helped us turn our idea into a fast, reliable app.",
          },
          {
            name: "Isaac",
            quote: "Excellent communication and great engineering.",
          },
          {
            name: "Jamal",
            quote: "Delivered on time and exceeded expectations.",
          },
        ].map((t) => (
          <motion.blockquote
            key={t.name}
            variants={{
              hidden: { opacity: 0, y: 12 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.45, ease: "easeOut" },
              },
            }}
            className="p-6 rounded-xl border bg-white"
          >
            <p className="text-slate-700">“{t.quote}”</p>
            <footer className="mt-4 text-sm text-slate-500">— {t.name}</footer>
          </motion.blockquote>
        ))}
      </motion.div>
    </section>
  );
};

export default Testimonials;
