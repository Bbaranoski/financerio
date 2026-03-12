import { Receita } from "@/types/receita";

type Props = {
    receita: Receita
}

export default function ReceitaCard({ receita }: Props) {
    return(
        <div className="border rounded-lg p-4 shadow-sm bg-white">
            <h3 className="text-lg font-semibold">{receita.nome}</h3>

            <p className="text-gray-600">{receita.descricao}</p>

            <div className="flex justify-between mt-2">
                <span className="font-bold text-green-600">
                    R$ {receita.valor}
                </span>

                <span className="text-sm text-gray-500">
                    {receita.tipo}
                </span>
            </div>
        </div>
    )
}