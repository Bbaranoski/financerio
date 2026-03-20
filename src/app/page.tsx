import SummaryCard from "@/components/SummaryCard"
import { Wallet, TrendingUp, TrendingDown } from "lucide-react"

export default function Home() {
    return (
        <div className="flex flex-col gap-6">
            <h1 className="text-2xl font-bold text-black dark:text-white transition-colors duration-300">
                Dashboard
            </h1>

            <div className="grid grid-cols-3 gap-6">
                <SummaryCard
                    titulo="Saldo"
                    valor={25000}
                    cor="saldo"
                    icone={<Wallet />}
                />
                
                <SummaryCard
                    titulo="Receitas"
                    valor={25}
                    cor="entrada"
                    icone={<TrendingUp />}
                />

                <SummaryCard
                    titulo="Despesas"
                    valor={10}
                    cor="saida"
                    icone={<TrendingDown />}
                />
            </div>
        </div>
    )
}