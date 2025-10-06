import { motion } from "framer-motion";
import { container } from "../utils/animate";
const Hero = () => {
  return (
    <section id="about" className="bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
        <motion.div initial="hidden" animate="show" variants={container}>
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 12 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.45, ease: "easeOut" },
              },
            }}
            className="text-4xl md:text-5xl font-extrabold leading-tight"
          >
            We build modern web apps and websites for ambitious companies and teams.
          </motion.h2>
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 12 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.45, ease: "easeOut" },
              },
            }}
            className="mt-4 text-slate-600"
          >
            Pkay Software Consultancy helps startups and SMBs ship beautiful,
            reliable web experiences — from idea to production.
          </motion.p>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 12 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.45, ease: "easeOut" },
              },
            }}
            className="mt-6 flex gap-3"
          >
            <motion.a
              whileHover={{ scale: 1.03 }}
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-indigo-600 text-white shadow"
            >
              Get in touch
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.03 }}
              href="#portfolio"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-md border"
            >
              See our work
            </motion.a>
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 12 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.45, ease: "easeOut" },
              },
            }}
            className="mt-8 grid grid-cols-3 gap-3 text-sm text-slate-500"
          >
            <div>
              <div className="text-2xl font-semibold">2+</div>
              <div>Years building web products</div>
            </div>
            <div>
              <div className="text-2xl font-semibold">4+</div>
              <div>Projects delivered</div>
            </div>
            <div>
              <div className="text-2xl font-semibold">100%</div>
              <div>Client satisfaction (target)</div>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12 }}
          className="order-first md:order-last"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="rounded-2xl overflow-hidden shadow-xl border border-slate-100"
          >
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder"
              alt="Product screenshot"
              className="w-full h-72 object-cover md:h-96"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
