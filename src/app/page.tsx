"use client"

import { useState } from "react"

export default function Home() {
    
    const receitas = [
        { valor: 1000 },
        { valor: 26000 }
    ]

    const despesas = [
        { valor: 25 },
        { valor: 1000}
    ]

    const totalReceitas = receitas.reduce(
        (acc, r) => acc + r.valor,
        0
    )

    const totalDespesas = despesas.reduce(
        (acc, r) => acc + r.valor,
        0
    )

    const saldo = totalReceitas - totalDespesas

    return(
        <div className="flex flex-col gap-6">
            <h1 className="text-2xl font-bold">
                Dashboard
            </h1>

            <div className="grid grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded shadow">
                    <p>Saldo</p>
                    <h2 className="text-xl font-bold">
                        R$ {saldo}
                    </h2>
                </div>

                <div className="bg-white p-4 rounded shadow">
                    <p>Receitas</p>
                    <h2 className="text-green-600 font-bold">
                        R$ {totalReceitas}
                    </h2>
                </div>

                <div className="bg-white p-4 rounded shadow">
                    <p>Despesas</p>
                    <h2 className="text-red-600 font-bold">
                        R$ {totalDespesas}
                    </h2>
                </div>
            </div>
        </div>
    )
}