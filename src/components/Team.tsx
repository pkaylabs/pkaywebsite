import { motion } from "framer-motion";
import { developers } from "../utils/developers";
import { container } from "../utils/animate";

export interface Developer {
    id: number;
    name: string;
    role: string;
    skills: string[];
    bio: string;
    img: string;
    linkedin: string;
  github: string;
  phone: string

}

const Team = ({ onSelect }: { onSelect: (developer: Developer) => void }) => {
  return (
    <section id="team" className="max-w-6xl mx-auto px-6 py-16">
      <h3 className="text-2xl font-bold">Meet the team</h3>
      <p className="text-slate-600 mt-2">
        Skilled engineers and designers who build the product.
      </p>

      <motion.div
        className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={container}
      >
        {developers.map((dev) => (
          <motion.article
            key={dev.id}
            variants={{
              hidden: { opacity: 0, y: 12 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.45, ease: "easeOut" },
              },
            }}
            className="rounded-xl overflow-hidden shadow-sm bg-white border p-4"
            whileHover={{ scale: 1.02, y: -6 }}
            transition={{ type: "spring", stiffness: 260 }}
          >
            <div className="flex items-center gap-4">
              <img
                src={dev.img}
                alt={dev.name}
                className="w-16 h-16 rounded-lg object-cover"
              />
              <div>
                <div className="text-sm text-slate-500">{dev.role}</div>
                <h4 className="font-semibold mt-1">{dev.name}</h4>
                <div className="mt-2 text-xs text-slate-500">
                  {dev.skills.join(" • ")}
                </div>
              </div>
            </div>

            <p className="mt-4 text-sm text-slate-600 line-clamp-3">
              {dev.bio}
            </p>

            <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                {/* <a
                  href={dev.linkedin}
                  aria-label="LinkedIn"
                  className="text-slate-400 hover:text-indigo-600 text-sm"
                >
                  LinkedIn
                </a> */}
                <a
                  href={dev.github}
                  aria-label="GitHub"
                  target="_blank"
                  className="text-slate-400 hover:text-indigo-600 text-sm"
                >
                  GitHub
                </a>
              </div>
              <button
                onClick={() => onSelect(dev)}
                className="px-3 py-1 rounded-md bg-indigo-600 text-white text-sm cursor-pointer"
              >
                View
              </button>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
};

export default Team;
