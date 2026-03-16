import Link from "next/link";

export default function Sidebar() {
    return(
        <aside className="w-64 h-screen bg-gray-900 text-white p-4">
            <h2 className="text-xl font-bold gap-3">
                Financeiro
            </h2>

            <nav className="flex flex-col gap-3">
                <Link href="/">
                    Dashboard
                </Link>

                <Link href="/receitas">
                    Receitas
                </Link>

                <Link href="/despesas">
                    Despesas
                </Link>
            </nav>
        </aside>
    )
}