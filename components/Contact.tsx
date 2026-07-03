"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
    return (
        <section
            id="contact"
            className="px-6 py-20 bg-gray-50 dark:bg-zinc-950"
        >
            <div className="mx-auto max-w-4xl text-center">

                {/* Title */}
                <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Contact Me
                </h2>

                <p className="mt-4 text-gray-600 dark:text-gray-300">
                    I'm open to internship and junior frontend opportunities
                </p>

                {/* Contact Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mt-12 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
                >

                    <p className="text-gray-600 dark:text-gray-300">
                        If you're looking for a frontend developer or intern, feel free
                        to reach out. I'm currently based in Poland and open to
                        English-speaking opportunities.
                    </p>

                    {/* Email */}
                    <div className="mt-6 flex flex-col items-center gap-4">
                        <a
                            href="mailto:getnetprupayder@gmail.com"
                            className="flex items-center gap-2 rounded-xl bg-black px-6 py-3 text-white transition hover:scale-105 dark:bg-white dark:text-black"
                        >
                            <FaEnvelope />
                            Send Email
                        </a>
                    </div>

                    {/* Socials */}
                    <div className="mt-8 flex justify-center gap-6 text-2xl text-gray-700 dark:text-gray-200">

                        <a
                            href="https://github.com/Plu77"
                            target="_blank"
                            className="hover:text-black dark:hover:text-white transition"
                        >
                            <FaGithub />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/prupayder-molla-490767261"
                            target="_blank"
                            className="hover:text-blue-600 transition"
                        >
                            <FaLinkedin />
                        </a>

                    </div>

                </motion.div>
            </div>
        </section>
    );
}