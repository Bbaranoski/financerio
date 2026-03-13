"use cliente"

import { useState } from "react"

type Props = {
    onAddReceita: (receita: any) => void
}

export default function ReceitaForm({ onAddReceita }: Props) {
    const [nome, setNome] = useState("")
    const [descricao, setDescricao] = useState("")
    const [valor, setValor] = useState("")

    function handleSubmit(e: any) {
        e.preventDefault()

        const novaReceita = {
            id: crypto.randomUUID(),
            nome,
            descricao,
            valor: Number(valor),
            tipo: "entrada"
        }

        onAddReceita(novaReceita)

        setNome("")
        setDescricao("")
        setValor("")
    }

    return (
        <form className="flex flex-col gap-3 border p-4 rounded-lg bg-white"
            onSubmit={handleSubmit}
        >
            <h2 className="text-lg font-semibold">Adicionar Receita</h2>

            <input className="border p-2 rounded"
                placeholder="Nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
            />

            <input className="border p-2 rounded"
                placeholder="Descrição"
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
            />


            <input className="border p-2 rounded"
                type="number"
                placeholder="Valor"
                value={valor}
                onChange={(e) => setValor(e.target.value)}
            />

            <button className="bg-green-600 text-white p-2 rounded"
                type="submit"
            >
                Adicionar
            </button>
        </form>
    )
}