"use client"

import { useState } from "react"
import TransactionCard from "@/components/TransactionCard"
import TransactionForm from "@/components/TransactionForm"
import { Transaction } from "@/types/transaction"

export default function DespesasPage() {
    const [despesas, setDespesas] = useState<Transaction[]>([])

    function adicionarReceita(despesas: Transaction) {
        setDespesas((prev) => [...prev, despesas])
    }

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-2xl font-bold mb-6">Controle de Despesas</h1>

            <TransactionForm onAdd={adicionarReceita} type="saida" />

            <div className="grid grid-cols-1 mb:grid-cols-2 gap-4 mt-6">
                {despesas.map((despesas) => (
                    <TransactionCard key={despesas.id} transaction={despesas} />
                ))}
            </div>
        </div>
    )
}