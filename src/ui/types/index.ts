export type Category = {
  id: string
  name: string
  createdAt: Date
  updatedAt: Date
}

export type CategoryDistribution = {
  amount: number
  categoryId: string
  category: string
  percentage: number
}