"use client";

import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";

const projects = [
    {
        title: "User Dashboard",
        description:
            "A modern dashboard application with authentication, protected routes, and a clean responsive interface built with TypeScript and React.",
        image: "/projects/dashboard.png",
        tech: ["React", "TypeScript", "CSS", "REST API"],
        github: "https://github.com/Plu77/User-Dashboard",
    },
    {
        title: "Country Facts Explorer",
        description:
            "A full-stack application that explores country information using APIs with a React frontend and backend integration.",
        image: "/projects/country-facts.png",
        tech: ["React", "Python", "FastAPI", "SQLite"],
        github: "https://github.com/Plu77/country-facts-explorer",
    },
];

export default function Projects() {
    return (
        <section
            id="projects"
            className="relative overflow-hidden px-6 py-24 bg-white dark:bg-zinc-950"
        >

            {/* Background Glow */}
            <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

            <div className="relative mx-auto max-w-6xl">


                {/* Heading */}

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >

                    <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">

                        Featured Projects

                    </h2>


                    <p className="mt-4 text-gray-600 dark:text-gray-300">

                        Selected projects showcasing my frontend and full-stack development skills.

                    </p>

                </motion.div>




                {/* Projects Grid */}

                <div className="mt-14 grid gap-10 md:grid-cols-2">


                    {projects.map((project, index) => (


                        <motion.div

                            key={project.title}

                            initial={{
                                opacity: 0,
                                y: 40
                            }}

                            whileInView={{
                                opacity: 1,
                                y: 0
                            }}

                            viewport={{
                                once: true
                            }}

                            transition={{
                                delay: index * 0.15,
                                duration: 0.6
                            }}


                            whileHover={{
                                y: -10
                            }}


                            className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg transition dark:border-zinc-800 dark:bg-zinc-900"

                        >



                            {/* Gradient Border Effect */}

                            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 blur-xl transition duration-500 group-hover:opacity-40" />





                            {/* Image */}

                            <div className="relative h-56 overflow-hidden">


                                <Image

                                    src={project.image}

                                    alt={project.title}

                                    fill

                                    className="object-cover transition duration-700 group-hover:scale-110"

                                />


                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition group-hover:opacity-100" />


                            </div>






                            {/* Content */}

                            <div className="p-7">


                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">

                                    {project.title}

                                </h3>



                                <p className="mt-3 leading-7 text-gray-600 dark:text-gray-300">

                                    {project.description}

                                </p>






                                {/* Tech */}

                                <div className="mt-5 flex flex-wrap gap-2">

                                    {project.tech.map((tech) => (

                                        <span

                                            key={tech}

                                            className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-sm font-medium text-gray-700 dark:border-zinc-700 dark:bg-zinc-800 dark:text-gray-200"

                                        >

                                            {tech}

                                        </span>

                                    ))}


                                </div>






                                {/* Github Button */}

                                <div className="mt-7">


                                    <a

                                        href={project.github}

                                        target="_blank"

                                        rel="noopener noreferrer"

                                        className="inline-flex items-center gap-2 rounded-xl bg-black px-5 py-3 text-sm font-medium text-white transition hover:scale-105 dark:bg-white dark:text-black"

                                    >

                                        <FaGithub />

                                        View Code

                                    </a>


                                </div>


                            </div>



                        </motion.div>


                    ))}


                </div>


            </div>

        </section>
    );
}