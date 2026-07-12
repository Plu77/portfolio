"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import Image from "next/image";
import { useState } from "react";

const floatingTech = [
    {
        name: "React",
        className: "top-10 -left-8",
    },
    {
        name: "TypeScript",
        className: "top-28 -right-12",
    },
    {
        name: "Next.js",
        className: "bottom-16 -left-10",
    },
];

export default function Hero() {


    // 3D tilt values
    const rotateX = useMotionValue(0);
    const rotateY = useMotionValue(0);


    const springRotateX = useSpring(rotateX, {
        stiffness: 150,
        damping: 15,
    });


    const springRotateY = useSpring(rotateY, {
        stiffness: 150,
        damping: 15,
    });



    // Cursor glow position
    const [mousePosition, setMousePosition] = useState({
        x: 50,
        y: 50,
    });



    const handleMouseMove = (
        e: React.MouseEvent<HTMLDivElement>
    ) => {


        const rect = e.currentTarget.getBoundingClientRect();


        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;


        const centerX = rect.width / 2;
        const centerY = rect.height / 2;


        rotateX.set(
            ((y - centerY) / centerY) * -15
        );


        rotateY.set(
            ((x - centerX) / centerX) * 15
        );


        setMousePosition({
            x: x,
            y: y,
        });

    };



    const handleMouseLeave = () => {

        rotateX.set(0);
        rotateY.set(0);

        setMousePosition({
            x: 50,
            y: 50,
        });

    };



    return (
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-24">


            {/* Background */}
            <div className="absolute inset-0 -z-10">


                <div className="absolute left-20 top-20 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl animate-pulse" />


                <div className="absolute right-20 bottom-20 h-80 w-80 rounded-full bg-purple-500/20 blur-3xl animate-pulse" />


                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-100 dark:from-zinc-950 dark:via-zinc-950 dark:to-zinc-900" />


            </div>




            <div className="z-10 grid max-w-6xl items-center gap-14 md:grid-cols-2">



                {/* LEFT CONTENT */}

                <motion.div

                    initial={{
                        opacity: 0,
                        y: 40
                    }}

                    animate={{
                        opacity: 1,
                        y: 0
                    }}

                    transition={{
                        duration: 0.8
                    }}

                >


                    <p className="text-lg text-gray-600 dark:text-gray-300">
                        👋 Hi, I'm
                    </p>



                    <h1 className="mt-3 text-5xl font-extrabold md:text-6xl">

                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">

                            Prupayder Getnet Molla

                        </span>

                    </h1>



                    <h2 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-100">

                        Frontend Developer | React & TypeScript

                    </h2>



                    <p className="mt-6 max-w-xl leading-7 text-gray-600 dark:text-gray-300">

                        I build modern, responsive web applications using React,
                        Next.js, TypeScript, and Tailwind CSS. Passionate about
                        creating clean interfaces, scalable solutions, and
                        delivering great user experiences.

                    </p>




                    <div className="mt-8 flex flex-wrap gap-4">


                        <motion.a

                            whileHover={{
                                scale: 1.05
                            }}

                            href="#projects"

                            className="rounded-xl bg-black px-6 py-3 text-white dark:bg-white dark:text-black"

                        >

                            View Projects

                        </motion.a>




                        <motion.a

                            whileHover={{
                                scale: 1.05
                            }}

                            href="/CV.pdf"

                            className="flex items-center gap-2 rounded-xl border px-6 py-3 dark:border-zinc-700"

                        >

                            <FaDownload />

                            Download CV

                        </motion.a>


                    </div>





                    <div className="mt-8 flex gap-6 text-2xl">


                        <a
                            href="https://github.com/Plu77"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition hover:text-blue-600"
                        >

                            <FaGithub />

                        </a>



                        <a
                            href="https://www.linkedin.com/in/prupayder-molla-490767261"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition hover:text-blue-600"
                        >

                            <FaLinkedin />

                        </a>


                    </div>


                </motion.div>







                {/* RIGHT IMAGE */}

                <div className="relative flex justify-center">





                    {floatingTech.map((tech, index) => (


                        <motion.div

                            key={tech.name}

                            animate={{
                                y: [0, -15, 0]
                            }}

                            transition={{
                                duration: 3 + index,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}

                            className={`absolute ${tech.className} z-20 rounded-xl border bg-white/80 px-4 py-2 text-sm font-semibold shadow-xl backdrop-blur-md dark:border-zinc-700 dark:bg-zinc-900/80`}

                        >

                            {tech.name}


                        </motion.div>


                    ))}







                    <motion.div

                        onMouseMove={handleMouseMove}

                        onMouseLeave={handleMouseLeave}

                        style={{
                            rotateX: springRotateX,
                            rotateY: springRotateY,
                            transformStyle: "preserve-3d",
                        }}

                        whileHover={{
                            scale: 1.03,
                        }}

                        transition={{
                            type: "spring",
                            stiffness: 200,
                            damping: 20,
                        }}

                        className="relative h-72 w-72 md:h-96 md:w-96"

                    >




                        {/* Cursor Glow */}

                        <motion.div

                            animate={{

                                x: mousePosition.x - 150,

                                y: mousePosition.y - 150,

                            }}



                            transition={{

                                type: "spring",

                                stiffness: 100,

                                damping: 20

                            }}



                            className="absolute h-72 w-72 rounded-full bg-blue-500/10 blur-3xl"

                        />






                        {/* Image Glow */}

                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 blur-3xl opacity-50" />






                        <Image

                            src="/profile.jpg"

                            alt="Prupayder Getnet"

                            fill

                            priority

                            className="rounded-full border-4 border-white object-cover shadow-2xl dark:border-zinc-800"

                        />



                    </motion.div>



                </div>


            </div>


        </section>
    );
}