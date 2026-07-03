"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
    const { resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <button
            onClick={() =>
                setTheme(resolvedTheme === "dark" ? "light" : "dark")
            }
            className="rounded-full border border-gray-300 p-2 transition hover:bg-gray-100 dark:border-zinc-700 dark:hover:bg-zinc-800"
        >
            {resolvedTheme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
        </button>
    );
}