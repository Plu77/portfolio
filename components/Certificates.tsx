"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const certificates = [
    {
        image: "/certificates/git-github.jpg",
        alt: "Git & GitHub Certificate",
    },
    {
        image: "/certificates/react.jpg",
        alt: "React Certificate",
    },
    {
        image: "/certificates/typescript.jpg",
        alt: "TypeScript Certificate",
    },
];

export default function Certificates() {
    return (
        <section
            id="certificates"
            className="py-24 bg-white dark:bg-zinc-950 transition-colors"
        >
            <div className="max-w-7xl mx-auto px-6">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl font-bold text-center">
                        Certificates
                    </h2>

                    <p className="text-center mt-4 text-gray-600 dark:text-gray-400">
                        Professional certifications that support my continuous learning.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8 mt-14">

                    {certificates.map((certificate, index) => (
                        <motion.div
                            key={index}
                            whileHover={{
                                scale: 1.04,
                                y: -8,
                            }}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.15 }}
                            viewport={{ once: true }}
                            className="overflow-hidden rounded-2xl border border-gray-200 dark:border-zinc-800 shadow-xl bg-white dark:bg-zinc-900"
                        >
                            <Image
                                src={certificate.image}
                                alt={certificate.alt}
                                width={700}
                                height={500}
                                className="w-full h-auto object-cover"
                            />
                        </motion.div>
                    ))}

                </div>
            </div>
        </section>
    );
}