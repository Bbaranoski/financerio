"use client"

import { useState } from "react"
import TransactionCard from "@/components/TransactionCard"
import TransactionForm from "@/components/TransactionForm"
import { Transaction } from "@/types/transaction"

export default function ReceitaPage() {
    const [receita, setReceita] = useState<Transaction[]> ([])

    function adicionarReceita(receita: Transaction) {
        setReceita((prev) => [...prev, receita])
    }

    return(
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-2xl font-bold mb-6 text-black dark:text-white transition-colors duration-300">Controle de Receitas</h1>

            <TransactionForm onAdd={adicionarReceita} type="entrada" />

            <div className="grid grid-cols-1 mb:grid-cols-2 gap-4 mt-6">
                {receita.map((receita) => (
                    <TransactionCard key={receita.id} transaction={receita} />
                ))}
            </div>
        </div>
    )
}