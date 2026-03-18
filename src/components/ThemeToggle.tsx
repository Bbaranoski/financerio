"use client"

import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme()

    return (
        <button className="p-2 rounded hover:bg-zinc-100 dark:hover:bg-zinc-800 cursor-pointer text-black dark:text-white"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
        </button>
    )
}