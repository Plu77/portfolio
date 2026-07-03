"use client";

import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
    {
        title: "User Dashboard",
        description:
            "A responsive admin dashboard built with TypeScript and modern UI principles.",
        image: "/projects/dashboard.png",
        tech: ["TypeScript", "HTML", "CSS"],
        github: "https://github.com/Plu77/User-Dashboard",
        demo: "#",
    },
    {
        title: "Country Facts Explorer",
        description:
            "Full-stack app that explores country data using APIs and backend integration.",
        image: "/projects/country-facts.png",
        tech: ["Python", "Flask", "JavaScript"],
        github: "https://github.com/Plu77/country-facts-explorer",
        demo: "#",
    },
];

export default function Projects() {
    return (
        <section
            id="projects"
            className="px-6 py-20 bg-white dark:bg-zinc-950"
        >
            <div className="mx-auto max-w-6xl">

                {/* Title */}
                <h2 className="text-center text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Featured Projects
                </h2>

                <p className="mt-4 text-center text-gray-600 dark:text-gray-300">
                    Some of my recent work and personal projects
                </p>

                {/* Grid */}
                <div className="mt-12 grid gap-8 md:grid-cols-2">

                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-900"
                        >

                            {/* Image */}
                            <div className="h-52 w-full overflow-hidden bg-gray-100 dark:bg-zinc-800">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-6">

                                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                                    {project.title}
                                </h3>

                                <p className="mt-2 text-gray-600 dark:text-gray-300">
                                    {project.description}
                                </p>

                                {/* Tech */}
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {project.tech.map((t) => (
                                        <span
                                            key={t}
                                            className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700 dark:bg-zinc-800 dark:text-gray-200"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                {/* Buttons */}
                                <div className="mt-6 flex gap-3">

                                    <a
                                        href={project.github}
                                        target="_blank"
                                        className="flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2 text-sm text-gray-700 transition hover:bg-gray-100 dark:border-zinc-700 dark:text-gray-200 dark:hover:bg-zinc-800"
                                    >
                                        <FaGithub />
                                        Code
                                    </a>

                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 text-sm text-white transition hover:scale-105"
                                    >
                                        <FaExternalLinkAlt />
                                        Live
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