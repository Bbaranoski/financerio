import Link from "next/link";
import { Home, TrendingUp, TrendingDown } from "lucide-react";

export default function Sidebar() {
    return (
        <aside className="w-64 h-screen bg-gray-900 text-white flex flex-col">
            <h2 className="p-6 text-2xl font-bold border-b border-gray-700">
                Financeiro
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