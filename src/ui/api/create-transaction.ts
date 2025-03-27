import { api } from "../lib/axios";

interface CreateTransactionBody {
  name: string
  amount: number
  type: 'income' | 'outcome'
  categoryId: string
  date: Date
}

export async function createTransaction({ name, amount, type, categoryId, date }: CreateTransactionBody) {
  const response = await api.post('/transactions', {
    name, 
    amount,
    type,
    categoryId,
    date
  })

  return response.status
}