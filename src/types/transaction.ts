export type Transaction = {
    id: string
    nome: string
    descricao: string
    valor: number
    tipo: "entrada" | "saida"
}