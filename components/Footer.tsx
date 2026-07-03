"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="border-t border-gray-200 bg-white py-10 dark:border-zinc-800 dark:bg-zinc-950">

            <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 md:flex-row">

                {/* Left */}
                <p className="text-center text-sm text-gray-600 dark:text-gray-400">
                    © {new Date().getFullYear()} Prupayder Molla. All rights reserved.
                </p>

                {/* Center */}
                <p className="text-sm text-gray-500 dark:text-gray-500">
                    Built with Next.js • Tailwind CSS • Framer Motion
                </p>

                {/* Right */}
                <div className="flex items-center gap-5 text-xl text-gray-600 dark:text-gray-300">

                    <a
                        href="https://github.com/Plu77"
                        target="_blank"
                        className="transition hover:text-black dark:hover:text-white"
                    >
                        <FaGithub />
                    </a>

                    <a
                        href="https://linkedin.com"
                        target="_blank"
                        className="transition hover:text-blue-600"
                    >
                        <FaLinkedin />
                    </a>

                </div>

            </div>
        </footer>
    );
}