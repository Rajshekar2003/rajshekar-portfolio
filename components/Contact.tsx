"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;

    try {
      await emailjs.sendForm(
        "service_6sizfj",
        "template_hluyugs",
        form,
        "unxk_tvznfDrrvo6F"
      );

      setSent(true);
      form.reset();
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="section-spacing">
      <div className="max-w-4xl mx-auto px-6 md:px-20">

        {/* Title */}
        <Reveal>
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            Let’s Build Something Impactful
          </h2>
        </Reveal>

        {/* Glass Card Form */}
        <Reveal delay={0.1}>
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="
              bg-white/5
              backdrop-blur-xl
              border border-white/10
              rounded-2xl
              p-8 md:p-12
              space-y-8
              transition-all duration-500
            "
            whileHover={{
              borderColor: "rgba(255,255,255,0.25)",
            }}
          >
            {/* Name */}
            <motion.input
              whileFocus={{ scale: 1.01 }}
              type="text"
              name="from_name"
              placeholder="Your Name"
              required
              className="
                w-full
                bg-black/40
                border border-white/10
                rounded-xl
                px-6 py-4
                focus:border-white/40
                focus:bg-black/60
                outline-none
                transition
              "
            />

            {/* Email */}
            <motion.input
              whileFocus={{ scale: 1.01 }}
              type="email"
              name="from_email"
              placeholder="Your Email"
              required
              className="
                w-full
                bg-black/40
                border border-white/10
                rounded-xl
                px-6 py-4
                focus:border-white/40
                focus:bg-black/60
                outline-none
                transition
              "
            />

            {/* Message */}
            <motion.textarea
              whileFocus={{ scale: 1.01 }}
              name="message"
              placeholder="Your Message"
              rows={5}
              required
              className="
                w-full
                bg-black/40
                border border-white/10
                rounded-xl
                px-6 py-4
                focus:border-white/40
                focus:bg-black/60
                outline-none
                transition
                resize-none
              "
            />

            {/* Button */}
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              type="submit"
              disabled={loading}
              className="
                w-full
                py-4
                bg-white
                text-black
                rounded-full
                font-semibold
                shadow-lg shadow-white/20
                transition
                disabled:opacity-70
              "
            >
              {loading ? "Sending..." : sent ? "Message Sent ✓" : "Send Message"}
            </motion.button>

            {/* Success Message */}
            {sent && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-green-400 text-center mt-2"
              >
                Message sent successfully 🚀
              </motion.p>
            )}
          </motion.form>
        </Reveal>

      </div>
    </section>
  );
}