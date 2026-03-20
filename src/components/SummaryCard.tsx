import { ReactNode } from "react"

type Props = {
    titulo: string
    valor: number
    cor: "entrada" | "saida" | "saldo"
    icone: ReactNode
}

export default function SummaryCard({ titulo, valor, cor, icone }: Props) {
    return (
        <div className="bg-zinc-50 dark:bg-black p-6 rounded-xl shadow-sm flex justify-between transition-colors duration-300">
            <div>
                <p className="text-gray-500">
                    {titulo}
                </p>

                <h2 className={`text-2xl font-bold ${(cor === "entrada") ? "text-green-600" :
                        (cor === "saida") ? "text-red-600" :
                            "text-black dark:text-white"} transition-colors duration-300`}
                >
                    R$ {valor}
                </h2>
            </div>
            
            <div className="text-gray-400">
                {icone}
            </div>
        </div>
    )
}