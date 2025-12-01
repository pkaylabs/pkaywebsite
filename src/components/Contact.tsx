import { useState } from "react";
import { motion } from "framer-motion";
import { container } from "../utils/animate";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    console.log("Contact form submitted", form);
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  }
  return (
    <section id="contact" className="bg-white/60 py-16">
      <div className="max-w-3xl mx-auto px-6">
        <h3 className="text-2xl font-bold">Get in touch</h3>
        <p className="text-slate-600 mt-2">
          Tell us about your project and timeline. We'll get back within 48
          hours.
        </p>

        <motion.form
          onSubmit={handleSubmit}
          className="mt-6 grid gap-4"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={container}
        >
          <motion.input
            variants={{
              hidden: { opacity: 0, y: 12 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.45, ease: "easeOut" },
              },
            }}
            required
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            className="px-4 py-3 rounded-md border"
          />
          <motion.input
            variants={{
              hidden: { opacity: 0, y: 12 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.45, ease: "easeOut" },
              },
            }}
            required
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            type="email"
            className="px-4 py-3 rounded-md border"
          />
          <motion.textarea
            variants={{
              hidden: { opacity: 0, y: 12 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.45, ease: "easeOut" },
              },
            }}
            required
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={5}
            placeholder="Short description of the project"
            className="px-4 py-3 rounded-md border"
          />

          <div className="flex items-center gap-4">
            <motion.button
              variants={{
                hidden: { opacity: 0, y: 12 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.45, ease: "easeOut" },
                },
              }}
              whileHover={{ scale: 1.02 }}
              className="px-5 py-3 rounded-md bg-indigo-600 text-white cursor-pointer"
            >
              Send message
            </motion.button>
            {sent && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-sm text-green-600"
              >
                Thanks — we received your message!
              </motion.span>
            )}
          </div>
        </motion.form>

        <div className="mt-8 text-sm text-slate-600">
          <div>
            Or email us at{" "}
            <a
              href={`mailto:pkaysoftwareconsultancy@gmail.com?subject=${encodeURIComponent(
                "Project inquiry from website"
              )}&body=${encodeURIComponent(
                "Hi,\n\nI want to discuss a project. Please find details below.\n\nThanks."
              )}`}
              className="text-indigo-600"
            >
              pkaysoftwareconsultancy@gmail.com
            </a>
          </div>
          <div className="mt-2">
            Based in Accra — available for remote work worldwide.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
