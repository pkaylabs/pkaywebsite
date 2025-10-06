import { motion } from "framer-motion";
import { container } from "../utils/animate";
import { projects } from "../utils/projects";
import { Link } from "react-router";

const Portfolio = () => {
  return (
    <section id="portfolio" className="bg-slate-50 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-2xl font-bold">Selected work</h3>
        <p className="text-slate-600 mt-2">
          A small sample of projects we shipped.
        </p>

        <motion.div
          className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={container}
        >
          {projects.map((it) => (
            <motion.div
              key={it.id}
              variants={{
                hidden: { opacity: 0, y: 12 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.45, ease: "easeOut" },
                },
              }}
              className="rounded-xl overflow-hidden shadow-sm bg-white border"
              whileHover={{ scale: 1.03, y: -6 }}
              transition={{ type: "spring", stiffness: 280 }}
            >
              <img
                src={it.img}
                alt={it.title}
                className="w-full h-44 object-cover"
              />
              <div className="p-4">
                <div className="text-sm text-slate-500">{it.tag}</div>
                <h4 className="font-semibold mt-2">{it.title}</h4>
                <div className="mt-3">
                  <Link
                    to={it.path || "#"}
                    className="text-indigo-600 text-sm"
                  >
                    View →
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
