"use client"

import { useState } from "react"
import ReceitaCard from "@/components/ReceitaCard"
import ReceitaForm from "@/components/ReceitaForm"
import { Receita } from "@/types/receita"

export default function ReceitaPage() {
    const [receita, setReceita] = useState<Receita[]> ([])

    function adicionarReceita(receita: Receita) {
        setReceita((prev) => [...prev, receita])
    }

    return(
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-2xl font-bold mb-6">Controle de Receitas</h1>

            <ReceitaForm onAddReceita={adicionarReceita} />

            <div className="grid grid-cols-1 mb:grid-cols-2 gap-4 mt-6">
                {receita.map((receita) => (
                    <ReceitaCard key={receita.id} receita={receita} />
                ))}
            </div>
        </div>
    )
}