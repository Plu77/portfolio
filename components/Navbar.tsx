"use client";

import { useEffect, useState } from "react";
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
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${scrolled
                    ? "bg-white/70 dark:bg-zinc-900/70 backdrop-blur-xl shadow-md border-b border-gray-200 dark:border-zinc-800"
                    : "bg-transparent"
                }`}
        >
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

                {/* Logo */}
                <a
                    href="#"
                    className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                >
                    Prupayder
                </a>

                {/* Desktop Menu */}
                <div className="hidden items-center gap-8 md:flex">

                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="text-gray-700 transition hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400"
                        >
                            {item.name}
                        </a>
                    ))}

                    <ThemeToggle />

                    <a
                        href="/CV.pdf"
                        className="rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-5 py-2 text-white transition hover:scale-105"
                    >
                        Resume
                    </a>
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
            {open && (
                <div className="border-t border-gray-200 bg-white dark:border-zinc-800 dark:bg-zinc-900 md:hidden">
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
                        className="block px-6 py-4 font-semibold text-gray-800 dark:text-gray-200"
                    >
                        📄 Resume
                    </a>
                </div>
            )}
        </nav>
    );
}