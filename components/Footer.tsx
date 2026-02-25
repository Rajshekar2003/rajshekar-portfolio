"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative mt-32">

      {/* Top Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="relative py-24 px-6">

        {/* Soft Background Panel */}
        <div className="absolute inset-0 -z-10 bg-neutral-950/60 backdrop-blur-xl" />

        <div className="max-w-6xl mx-auto text-center space-y-10">

          {/* Brand */}
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl font-semibold tracking-tight"
          >
            Rajshekar RC
          </motion.h3>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center gap-8 text-xl"
          >
            <SocialIcon
              href="https://github.com/Rajshekar2003"
              icon={<FaGithub />}
            />
            <SocialIcon
              href="https://www.linkedin.com/in/rajshekarrc"
              icon={<FaLinkedin />}
            />
            <SocialIcon
              href="https://www.instagram.com/mr.______.roy?igsh=a3U2YWRrbG13anpk&utm_source=qr"
              icon={<FaInstagram />}
            />
          </motion.div>

          {/* Bottom Line */}
          <p className="text-sm text-gray-500 tracking-wide">
            © {new Date().getFullYear()} Rajshekar RC.
            <span className="text-gray-600"> Built with clean architecture.</span>
          </p>

        </div>
      </div>
    </footer>
  );
}

/* Reusable Social Icon */
function SocialIcon({
  href,
  icon,
}: {
  href: string;
  icon: React.ReactNode;
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.15, y: -4 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="text-gray-400 hover:text-white transition duration-300"
    >
      {icon}
    </motion.a>
  );
}