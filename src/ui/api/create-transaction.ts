import { api } from "../lib/axios";

interface CreateTransactionBody {
  name: string
  amount: number
  type: 'income' | 'outcome'
  categoryId: string
}

export async function createTransaction({ name, amount, type, categoryId }: CreateTransactionBody) {
  const response = await api.post('/transactions', {
    name, 
    amount,
    type,
    categoryId
  })

  return response.status
}