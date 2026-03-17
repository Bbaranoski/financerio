import Link from "next/link";
import { Home, TrendingUp, TrendingDown } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Sidebar() {
    return (
        <aside className="w-64 h-screen bg-zinc-950 dark:bg-zinc-50 text-white dark:text-black flex flex-col">
            <h2 className="p-6 text-2xl font-bold border-b border-gray-700 flex justify-between">
                Financeiro <ThemeToggle />
            </h2>

            <nav className="flex flex-col gap-2 p-4">
                <Link className="flex items-center gap-3 p-3 rounded hover:bg-gray-800"
                    href="/"
                >
                    <Home size={18} />
                    Dashboard
                </Link>

                <Link className="flex items-center gap-3 p-3 rounded hover:bg-gray-800"
                    href="/receitas"
                >
                    <TrendingUp size={18} />
                    Receitas
                </Link>

                <Link className="flex items-center gap-3 p-3 rounded hover:bg-gray-800"
                    href="/despesas"
                >
                    <TrendingDown size={18} />
                    Despesas
                </Link>                
            </nav>
        </aside>
    )
}