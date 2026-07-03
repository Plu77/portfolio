"use client";

import { motion } from "framer-motion";

export default function About() {
    return (
        <section
            id="about"
            className="px-6 py-20 bg-white dark:bg-zinc-950"
        >
            <div className="mx-auto max-w-5xl">

                {/* Title */}
                <h2 className="text-center text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    About Me
                </h2>

                {/* Content Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mt-12 rounded-2xl border border-gray-200 bg-gray-50 p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
                >

                    <p className="text-gray-700 leading-7 dark:text-gray-300">
                        I am a <span className="font-semibold">Web Application Development student</span> at WSB Merito University in Poland,
                        passionate about building modern and responsive web applications.
                    </p>

                    <br />

                    <p className="text-gray-700 leading-7 dark:text-gray-300">
                        My main focus is <span className="font-semibold">Frontend Development</span> using React, Next.js, TypeScript, and Tailwind CSS.
                        I also enjoy working with UI/UX tools like Figma to design clean and user-friendly interfaces.
                    </p>

                    <br />

                    <p className="text-gray-700 leading-7 dark:text-gray-300">
                        I have strong communication skills and professional English proficiency,
                        and I am comfortable working in international and multicultural environments.
                        I am currently looking for <span className="font-semibold">frontend internship or junior developer opportunities</span>.
                    </p>

                    {/* Info Cards */}
                    <div className="mt-10 grid gap-4 md:grid-cols-3">

                        <div className="rounded-xl border border-gray-200 bg-white p-4 text-center dark:border-zinc-800 dark:bg-zinc-950">
                            <p className="text-sm text-gray-500 dark:text-gray-400">Education</p>
                            <p className="font-semibold text-gray-800 dark:text-gray-200">
                                WSB Merito University
                            </p>
                        </div>

                        <div className="rounded-xl border border-gray-200 bg-white p-4 text-center dark:border-zinc-800 dark:bg-zinc-950">
                            <p className="text-sm text-gray-500 dark:text-gray-400">Focus</p>
                            <p className="font-semibold text-gray-800 dark:text-gray-200">
                                Frontend Development
                            </p>
                        </div>

                        <div className="rounded-xl border border-gray-200 bg-white p-4 text-center dark:border-zinc-800 dark:bg-zinc-950">
                            <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                            <p className="font-semibold text-gray-800 dark:text-gray-200">
                                Poland
                            </p>
                        </div>

                    </div>

                </motion.div>
            </div>
        </section>
    );
}