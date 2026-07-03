"use client";

import { motion } from "framer-motion";

const skills = [
    {
        category: "Frontend",
        items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS"],
    },
    {
        category: "UI/UX",
        items: ["Figma", "Responsive Design", "Wireframing", "Prototyping"],
    },
    {
        category: "Backend Basics",
        items: ["Node.js", "Express", "Python", "REST APIs"],
    },
    {
        category: "Tools",
        items: ["Git", "GitHub", "VS Code", "Postman"],
    },
];

export default function Skills() {
    return (
        <section
            id="skills"
            className="px-6 py-20 bg-gray-50 dark:bg-zinc-950"
        >
            <div className="mx-auto max-w-6xl text-center">

                <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Skills
                </h2>

                <p className="mt-4 text-gray-600 dark:text-gray-300">
                    Technologies and tools I work with
                </p>

                <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

                    {skills.map((group, index) => (
                        <motion.div
                            key={group.category}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-2 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900"
                        >
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                                {group.category}
                            </h3>

                            <div className="mt-4 flex flex-wrap gap-2">
                                {group.items.map((item) => (
                                    <span
                                        key={item}
                                        className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700 dark:bg-zinc-800 dark:text-gray-200"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}

                </div>
            </div>
        </section>
    );
}