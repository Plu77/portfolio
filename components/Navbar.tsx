"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {

    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);


    useEffect(() => {

        const handleScroll = () => {
            setScrolled(window.scrollY > 30);
        };


        window.addEventListener("scroll", handleScroll);


        return () => window.removeEventListener("scroll", handleScroll);

    }, []);



    const navItems = [
        { name: "Projects", href: "#projects" },
        { name: "Skills", href: "#skills" },
        { name: "Certificates", href: "#certificates" },
        { name: "About", href: "#about" },
        { name: "Contact", href: "#contact" },
    ];



    return (

        <motion.nav

            initial={{
                y: -100
            }}

            animate={{
                y: 0
            }}

            transition={{
                duration: 0.6
            }}


            className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${scrolled

                    ? "bg-white/70 dark:bg-zinc-900/70 backdrop-blur-xl border-b border-gray-200 shadow-lg dark:border-zinc-800"

                    : "bg-transparent"
                }`}

        >


            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">



                {/* Logo */}

                <a
                    href="#"
                    className="relative text-2xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                >

                    Prupayder

                </a>






                {/* Desktop */}

                <div className="hidden items-center gap-8 md:flex">


                    {navItems.map((item) => (

                        <a

                            key={item.name}

                            href={item.href}

                            className="group relative text-sm font-medium text-gray-700 dark:text-gray-200"

                        >

                            {item.name}


                            <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full" />


                        </a>

                    ))}



                    <ThemeToggle />




                    <motion.a

                        href="/CV.pdf"

                        whileHover={{
                            scale: 1.05
                        }}

                        className="rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-5 py-2 text-sm font-semibold text-white shadow-lg"

                    >

                        Resume

                    </motion.a>



                </div>







                {/* Mobile Button */}

                <button

                    onClick={() => setOpen(!open)}

                    className="text-2xl text-gray-800 dark:text-white md:hidden"

                >

                    {open ? <FaTimes /> : <FaBars />}

                </button>


            </div>







            {/* Mobile Menu */}

            <AnimatePresence>


                {open && (

                    <motion.div


                        initial={{
                            opacity: 0,
                            height: 0
                        }}


                        animate={{
                            opacity: 1,
                            height: "auto"
                        }}


                        exit={{
                            opacity: 0,
                            height: 0
                        }}



                        className="overflow-hidden border-t border-gray-200 bg-white/90 backdrop-blur-xl dark:border-zinc-800 dark:bg-zinc-900/90 md:hidden"

                    >



                        {navItems.map((item) => (

                            <a

                                key={item.name}

                                href={item.href}

                                onClick={() => setOpen(false)}

                                className="block px-6 py-4 text-gray-700 transition hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-zinc-800"

                            >

                                {item.name}

                            </a>

                        ))}





                        <a

                            href="/CV.pdf"

                            onClick={() => setOpen(false)}

                            className="block px-6 py-4 font-semibold text-blue-600 dark:text-blue-400"

                        >

                            📄 Download Resume

                        </a>




                    </motion.div>


                )}


            </AnimatePresence>



        </motion.nav>


    );
}