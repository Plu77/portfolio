"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative flex min-h-screen items-center justify-center px-6 pt-24">

            {/* Background */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 via-white to-purple-100 dark:from-zinc-950 dark:via-zinc-950 dark:to-zinc-900" />

            {/* Content */}
            <div className="z-10 grid max-w-6xl items-center gap-10 md:grid-cols-2">

                {/* LEFT TEXT */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >

                    <p className="text-lg text-gray-600 dark:text-gray-300">
                        👋 Hi, I’m
                    </p>

                    <h1 className="mt-2 text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Prupayder Getnet Molla
                    </h1>

                    <h2 className="mt-3 text-xl font-semibold text-gray-800 dark:text-gray-100">
                        Frontend Developer | Web Application Student
                    </h2>

                    <p className="mt-6 text-gray-600 dark:text-gray-300 leading-7">
                        I build modern, responsive web applications using React, Next.js, TypeScript, and Tailwind CSS. My main focus is to secure a frontend developer position in Poland, while also being open to internship opportunities that can lead to a full-time role.

                    </p>

                    {/* Buttons */}
                    <div className="mt-8 flex flex-wrap gap-4">

                        <a
                            href="#projects"
                            className="rounded-xl bg-black px-6 py-3 text-white dark:bg-white dark:text-black"
                        >
                            View Projects
                        </a>

                        <a
                            href="/CV.pdf"
                            className="flex items-center gap-2 rounded-xl border px-6 py-3 dark:border-zinc-700"
                        >
                            <FaDownload />
                            Download CV
                        </a>

                    </div>

                    {/* Socials */}
                    <div className="mt-8 flex gap-6 text-2xl text-gray-700 dark:text-gray-200">

                        <a href="https://github.com/Plu77" target="_blank">
                            <FaGithub />
                        </a>

                        <a href="https://www.linkedin.com/in/prupayder-molla-490767261" target="_blank">
                            <FaLinkedin />
                        </a>

                    </div>

                </motion.div>

                {/* RIGHT IMAGE */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="flex justify-center"
                >

                    <div className="relative h-72 w-72 md:h-96 md:w-96">

                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 blur-2xl opacity-40" />

                        <Image
                            src="/profile.jpg"
                            alt="Profile"
                            fill
                            className="rounded-full object-cover border-4 border-white dark:border-zinc-800"
                        />

                    </div>

                </motion.div>

            </div>
        </section>
    );
}