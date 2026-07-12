"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const certificates = [
    {
        title: "Git & GitHub",
        image: "/certificates/git-github.jpg",
        alt: "Git and GitHub Certificate",
    },
    {
        title: "React Development",
        image: "/certificates/react.jpg",
        alt: "React Certificate",
    },
    {
        title: "TypeScript",
        image: "/certificates/typescript.jpg",
        alt: "TypeScript Certificate",
    },
];


export default function Certificates() {

    return (

        <section
            id="certificates"
            className="relative overflow-hidden py-24 bg-white dark:bg-zinc-950"
        >


            {/* Background Glow */}

            <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl" />



            <div className="relative mx-auto max-w-6xl px-6">


                {/* Heading */}

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

                    transition={{
                        duration: 0.6
                    }}

                    className="text-center"

                >

                    <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">

                        Certificates

                    </h2>


                    <p className="mt-4 text-gray-600 dark:text-gray-400">

                        Certifications and achievements that support my continuous learning journey.

                    </p>


                </motion.div>






                {/* Certificates Grid */}

                <div className="mt-14 grid gap-8 md:grid-cols-3">


                    {certificates.map((certificate, index) => (


                        <motion.div


                            key={certificate.title}


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
                                delay: index * 0.15
                            }}



                            whileHover={{
                                y: -10,
                                rotateX: 5,
                                rotateY: -5
                            }}



                            className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-4 shadow-lg transition dark:border-zinc-800 dark:bg-zinc-900"



                            style={{
                                transformStyle: "preserve-3d"
                            }}

                        >



                            {/* Glow */}

                            <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 blur-xl transition duration-500 group-hover:opacity-30" />






                            {/* Image */}

                            <div className="overflow-hidden rounded-2xl">


                                <Image

                                    src={certificate.image}

                                    alt={certificate.alt}

                                    width={700}

                                    height={500}

                                    className="h-64 w-full object-cover transition duration-700 group-hover:scale-110"

                                />


                            </div>






                            {/* Title */}

                            <h3 className="mt-5 text-center text-lg font-semibold text-gray-900 dark:text-white">

                                {certificate.title}

                            </h3>



                            <p className="mt-2 text-center text-sm text-gray-500 dark:text-gray-400">

                                Professional Certificate

                            </p>




                        </motion.div>


                    ))}


                </div>


            </div>


        </section>

    );
}