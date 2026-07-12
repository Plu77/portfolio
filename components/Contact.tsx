"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const contacts = [
    {
        name: "Email",
        value: "getnetprupayder@gmail.com",
        icon: <FaEnvelope />,
        link: "mailto:getnetprupayder@gmail.com",
        color: "hover:text-red-500",
    },
    {
        name: "GitHub",
        value: "github.com/Plu77",
        icon: <FaGithub />,
        link: "https://github.com/Plu77",
        color: "hover:text-black dark:hover:text-white",
    },
    {
        name: "LinkedIn",
        value: "Prupayder Getnet",
        icon: <FaLinkedin />,
        link: "https://www.linkedin.com/in/prupayder-molla-490767261",
        color: "hover:text-blue-600",
    },
];


export default function Contact() {

    return (

        <section
            id="contact"
            className="relative overflow-hidden px-6 py-24 bg-gray-50 dark:bg-zinc-950"
        >

            {/* Background Glow */}
            <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />


            <div className="relative mx-auto max-w-5xl text-center">


                {/* Title */}

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

                >

                    <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">

                        Let's Work Together

                    </h2>


                    <p className="mt-4 text-gray-600 dark:text-gray-300">

                        Have a project or opportunity? Feel free to get in touch.

                    </p>


                </motion.div>





                {/* Card */}

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


                    <p className="mx-auto max-w-2xl leading-7 text-gray-600 dark:text-gray-300">

                        I'm a frontend developer focused on building modern,
                        responsive web applications with React, TypeScript,
                        and Next.js. I'm open to collaborating on exciting
                        projects and new opportunities.

                    </p>





                    {/* Contact Cards */}

                    <div className="mt-10 grid gap-5 md:grid-cols-3">


                        {contacts.map((contact, index) => (


                            <motion.a

                                key={contact.name}

                                href={contact.link}

                                target="_blank"

                                rel="noopener noreferrer"

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

                                whileHover={{
                                    y: -5,
                                    scale: 1.03
                                }}


                                className={`rounded-2xl border border-gray-200 bg-white p-5 transition dark:border-zinc-700 dark:bg-zinc-950 ${contact.color}`}

                            >

                                <div className="flex justify-center text-3xl">

                                    {contact.icon}

                                </div>


                                <h3 className="mt-3 font-semibold text-gray-900 dark:text-white">

                                    {contact.name}

                                </h3>


                                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">

                                    {contact.value}

                                </p>


                            </motion.a>


                        ))}


                    </div>



                </motion.div>


            </div>


        </section>

    );
}