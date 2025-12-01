import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Services from "./Services";
import Portfolio from "./Portfolio";
import Team, { type Developer } from "./Team";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import Footer from "./Footer";

const PkayWebsite = () => {
  const [selectedDeveloper, setSelectedDeveloper] = useState<Developer | null>(
    null
  );
  const openTeamModal = (developer: Developer) => {
    setSelectedDeveloper(developer);
  };
  const closeTeamModal = () => {
    setSelectedDeveloper(null);
  };

  return (
    <div className="min-h-screen font-sans text-slate-800">
      <Navbar
        onOpenTeam={() =>
          document
            .getElementById("team")
            ?.scrollIntoView({ behavior: "smooth" })
        }
      />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Team onSelect={openTeamModal} />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      {/* Team modal */}
      {selectedDeveloper && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.18 }}
            className="absolute inset-0 bg-black/40"
            onClick={closeTeamModal}
          />

          <motion.div className="relative z-50 max-w-2xl mx-auto p-6 bg-white rounded-2xl shadow-xl">
            <div className="flex items-start gap-4">
              <img
                src={selectedDeveloper.img}
                alt={selectedDeveloper.name}
                className="w-24 h-24 rounded-lg object-cover"
              />
              <div>
                <h4 className="text-xl font-semibold">{selectedDeveloper.name}</h4>
                <div className="text-sm text-slate-500">{selectedDeveloper.role}</div>
                <div className="text-sm text-slate-500">{selectedDeveloper.phone}</div>
                <div className="mt-3 text-sm text-slate-700">
                  {selectedDeveloper.bio}
                </div>

                <div className="mt-4 flex items-center gap-3">
                  <a
                    href={selectedDeveloper.github}
                    className="text-indigo-600 text-sm"
                    target="_blank"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-6 text-right">
              <button
                onClick={closeTeamModal}
                className="px-4 py-2 rounded-md bg-slate-100"
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default PkayWebsite;
