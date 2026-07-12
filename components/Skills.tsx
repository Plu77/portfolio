"use client";

import { motion } from "framer-motion";
import {
    FaReact,
    FaNodeJs,
    FaPython,
    FaGitAlt,
    FaFigma,
} from "react-icons/fa";
import {
    SiTypescript,
    SiNextdotjs,
    SiTailwindcss,
    SiJavascript,
    SiExpress,
    SiFastapi,
    SiPostman,
} from "react-icons/si";


const skills = [
    {
        category: "Frontend Development",
        icon: <FaReact className="text-blue-500" />,
        items: [
            "React",
            "Next.js",
            "TypeScript",
            "JavaScript",
            "Tailwind CSS",
        ],
    },

    {
        category: "Backend & APIs",
        icon: <FaNodeJs className="text-green-500" />,
        items: [
            "Node.js",
            "Express",
            "FastAPI",
            "Python",
            "REST APIs",
        ],
    },

    {
        category: "UI/UX & Design",
        icon: <FaFigma className="text-purple-500" />,
        items: [
            "Figma",
            "Responsive Design",
            "Wireframing",
            "Prototyping",
        ],
    },

    {
        category: "Tools & Workflow",
        icon: <FaGitAlt className="text-orange-500" />,
        items: [
            "Git",
            "GitHub",
            "VS Code",
            "Postman",
        ],
    },
];



const techIcons: Record<string, React.ReactNode> = {

    React: <FaReact />,
    "Next.js": <SiNextdotjs />,
    TypeScript: <SiTypescript />,
    JavaScript: <SiJavascript />,
    "Tailwind CSS": <SiTailwindcss />,
    "Node.js": <FaNodeJs />,
    Express: <SiExpress />,
    FastAPI: <SiFastapi />,
    Python: <FaPython />,
    Postman: <SiPostman />,

};



export default function Skills() {

    return (

        <section
            id="skills"
            className="relative overflow-hidden px-6 py-24 bg-gray-50 dark:bg-zinc-950"
        >


            {/* Background Glow */}

            <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl" />



            <div className="relative mx-auto max-w-6xl text-center">



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

                        Skills & Technologies

                    </h2>


                    <p className="mt-4 text-gray-600 dark:text-gray-300">

                        Technologies I use to build modern, scalable web applications.

                    </p>


                </motion.div>





                <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">



                    {skills.map((group, index) => (


                        <motion.div


                            key={group.category}


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
                                y: -8
                            }}


                            className="group rounded-3xl border border-gray-200 bg-white/70 p-6 shadow-lg backdrop-blur-md transition dark:border-zinc-800 dark:bg-zinc-900/70"


                        >



                            <div className="flex items-center justify-center gap-3 text-2xl">

                                {group.icon}


                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">

                                    {group.category}

                                </h3>


                            </div>






                            <div className="mt-6 flex flex-wrap justify-center gap-3">


                                {group.items.map((item) => (


                                    <motion.span


                                        key={item}


                                        whileHover={{
                                            scale: 1.08
                                        }}



                                        className="flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-700 dark:border-zinc-700 dark:bg-zinc-800 dark:text-gray-200"


                                    >

                                        {techIcons[item]}

                                        {item}


                                    </motion.span>


                                ))}



                            </div>



                        </motion.div>


                    ))}


                </div>


            </div>


        </section>

    );
}