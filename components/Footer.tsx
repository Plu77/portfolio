"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";

export default function Footer() {

    return (

        <footer className="relative overflow-hidden border-t border-gray-200 bg-white py-12 dark:border-zinc-800 dark:bg-zinc-950">


            {/* Background Glow */}

            <div className="absolute left-1/2 top-0 h-40 w-72 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />



            <motion.div

                initial={{
                    opacity: 0,
                    y: 30
                }}

                whileInView={{
                    opacity: 1,
                    y: 0
                }}

                viewport={{
                    once: true
                }}

                className="relative mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 px-6 md:flex-row"

            >




                {/* Brand */}

                <div className="text-center md:text-left">

                    <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">

                        Prupayder Getnet

                    </h3>


                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">

                        Frontend Developer building modern web experiences.

                    </p>


                </div>







                {/* Tech */}

                <p className="text-center text-sm text-gray-500 dark:text-gray-400">

                    Built with{" "}

                    <span className="font-medium text-gray-700 dark:text-gray-200">

                        Next.js

                    </span>

                    {" • "}

                    <span className="font-medium text-gray-700 dark:text-gray-200">

                        Tailwind CSS

                    </span>

                    {" • "}

                    <span className="font-medium text-gray-700 dark:text-gray-200">

                        Framer Motion

                    </span>

                </p>







                {/* Social */}

                <div className="flex items-center gap-4">


                    <a

                        href="https://github.com/Plu77"

                        target="_blank"

                        rel="noopener noreferrer"

                        className="rounded-full border border-gray-200 p-3 text-gray-600 transition hover:-translate-y-1 hover:text-black dark:border-zinc-800 dark:text-gray-300 dark:hover:text-white"

                    >

                        <FaGithub />

                    </a>





                    <a

                        href="https://www.linkedin.com/in/prupayder-getnet-490767261"

                        target="_blank"

                        rel="noopener noreferrer"

                        className="rounded-full border border-gray-200 p-3 text-gray-600 transition hover:-translate-y-1 hover:text-blue-600 dark:border-zinc-800 dark:text-gray-300"

                    >

                        <FaLinkedin />

                    </a>





                    <a

                        href="#"

                        className="rounded-full bg-gradient-to-r from-blue-600 to-purple-600 p-3 text-white transition hover:-translate-y-1"

                    >

                        <FaArrowUp />

                    </a>


                </div>




            </motion.div>







            {/* Bottom */}

            <div className="relative mt-10 text-center text-sm text-gray-500 dark:text-gray-500">

                © {new Date().getFullYear()} Prupayder Getnet. All rights reserved.

            </div>



        </footer>

    );
}