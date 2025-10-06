import { motion } from "framer-motion";
import { fadeIn } from "../utils/animate";
import { useState } from "react";

const Navbar = ({ onOpenTeam }: { onOpenTeam: () => void }) => {
  const [open, setOpen] = useState(false);
  return (
    <motion.header
      initial="hidden"
      animate="show"
      variants={fadeIn}
      className="bg-gray-100 backdrop-blur sticky top-0 z-40 shadow-sm"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.35 }}
          className="flex items-center gap-4"
        >
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-600 to-violet-500 flex items-center justify-center text-white font-bold">
            <img src={"logo.png"} alt="logo" className="w-full h-full shadow-lg" />
          </div>
          <div>
            <h1 className="text-lg font-semibold">Pkay Software Consultancy</h1>
            <p className="text-xs text-slate-500">
              Web apps & Websites built to scale
            </p>
          </div>
        </motion.div>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#services" className="hover:text-indigo-600">
            Services
          </a>
          <a href="#portfolio" className="hover:text-indigo-600">
            Portfolio
          </a>
          <a
            href="#team"
            onClick={onOpenTeam}
            className="hover:text-indigo-600"
          >
            Team
          </a>
          <a href="#about" className="hover:text-indigo-600">
            About
          </a>
          <a
            href="#contact"
            className="px-4 py-2 rounded-md bg-indigo-600 text-white"
          >
            Contact
          </a>
        </nav>
        <button
          className="md:hidden p-2 rounded-md"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>
      {/* Mobile */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={
          open ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }
        }
        transition={{ duration: 0.28 }}
        className={`md:hidden ${open ? "block" : "hidden"} px-6 pb-6`}
      >
        <nav className="flex flex-col gap-3 text-sm">
          <a href="#services" className="block">
            Services
          </a>
          <a href="#portfolio" className="block">
            Portfolio
          </a>
          <a href="#team" className="block">
            Team
          </a>
          <a href="#about" className="block">
            About
          </a>
          <a href="#contact" className="block">
            Contact
          </a>
        </nav>
      </motion.div>
    </motion.header>
  );
};

export default Navbar;
