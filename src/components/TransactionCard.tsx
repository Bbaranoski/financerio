import { Transaction } from "@/types/transaction";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

type Props = {
    transaction: Transaction
}

export default function TransactionCard({ transaction }: Props) {
    const isEntrada = transaction.tipo === "entrada"

    return (
        <div className="bg-white p-4 rounded-lg shadow flex justify-between">
            <div>
                <h3 className="font-semibold">
                    {transaction.nome}
                </h3>

                <p className="text-sm text-gray-500">
                    {transaction.descricao}
                </p>
            </div>

            <span className={`font-bold flex items-center gap-1 ${
                isEntrada ? "text-green-600" : "text-red-600"
                }`}
            >
                {isEntrada ? 
                    <ArrowUpRight /> : 
                    <ArrowDownRight />
                } 
                R$ {transaction.valor}
            </span>
        </div>
    )
}