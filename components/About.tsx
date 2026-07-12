"use client";

import { motion } from "framer-motion";

const info = [
    {
        title: "Education",
        value: "WSB Merito University",
    },
    {
        title: "Specialization",
        value: "Frontend Development",
    },
    {
        title: "Based In",
        value: "Poland",
    },
];

export default function About() {
    return (
        <section
            id="about"
            className="relative overflow-hidden px-6 py-24 bg-white dark:bg-zinc-950"
        >

            {/* Background Glow */}
            <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />


            <div className="relative mx-auto max-w-5xl">


                {/* Title */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >

                    <h2 className="text-center text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        About Me
                    </h2>


                    <p className="mt-4 text-center text-gray-600 dark:text-gray-300">
                        A little about my journey and what I build.
                    </p>

                </motion.div>




                {/* Main Card */}
                <motion.div

                    initial={{
                        opacity: 0,
                        y: 40
                    }}

                    whileInView={{
                        opacity: 1,
                        y: 0
                    }}

                    transition={{
                        duration: 0.6
                    }}

                    viewport={{
                        once: true
                    }}

                    className="mt-12 rounded-3xl border border-gray-200 bg-white/70 p-8 shadow-xl backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-900/70"

                >


                    <p className="leading-8 text-gray-700 dark:text-gray-300">

                        I am a frontend developer passionate about building modern,
                        responsive, and user-friendly web applications. I enjoy
                        transforming ideas into clean interfaces with great user
                        experiences.

                    </p>


                    <p className="mt-6 leading-8 text-gray-700 dark:text-gray-300">

                        My main focus is frontend development using{" "}
                        <span className="font-semibold text-gray-900 dark:text-white">
                            React, Next.js, TypeScript, and Tailwind CSS
                        </span>.
                        I also have experience working with backend technologies,
                        APIs, and UI/UX design tools like Figma.

                    </p>


                    <p className="mt-6 leading-8 text-gray-700 dark:text-gray-300">

                        I enjoy learning new technologies, building practical
                        projects, and improving my skills through real-world
                        development experience. During my Frontend Developer
                        Internship at Faye Technologies, I worked on building
                        web interfaces and improving user experiences using
                        modern frontend technologies.

                    </p>




                    {/* Info Cards */}

                    <div className="mt-10 grid gap-5 md:grid-cols-3">


                        {info.map((item, index) => (

                            <motion.div

                                key={item.title}

                                initial={{
                                    opacity: 0,
                                    y: 20
                                }}

                                whileInView={{
                                    opacity: 1,
                                    y: 0
                                }}

                                transition={{
                                    delay: index * 0.15
                                }}

                                viewport={{
                                    once: true
                                }}

                                whileHover={{
                                    y: -5
                                }}

                                className="rounded-2xl border border-gray-200 bg-white p-5 text-center shadow-sm transition dark:border-zinc-800 dark:bg-zinc-950"

                            >

                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    {item.title}
                                </p>


                                <p className="mt-2 font-semibold text-gray-900 dark:text-white">
                                    {item.value}
                                </p>


                            </motion.div>

                        ))}


                    </div>


                </motion.div>


            </div>


        </section>
    );
}