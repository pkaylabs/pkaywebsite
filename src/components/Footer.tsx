import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="bg-slate-900 text-slate-200 mt-12"
    >
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-start justify-between gap-6">
        <div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-indigo-600 flex items-center justify-center font-bold">
              <img src={"logo.png"} alt="logo" className="w-full h-full shadow-lg" />
            </div>
            <div>
              <div className="font-semibold">Pkay Software Consultancy</div>
              <div className="text-sm text-slate-300">Web apps & websites</div>
            </div>
          </div>
        </div>

        <div className="text-sm text-slate-400">
          <div>© {new Date().getFullYear()} Pkay Software Consultancy</div>
          <div className="mt-2">Built with care in Ghana.</div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
