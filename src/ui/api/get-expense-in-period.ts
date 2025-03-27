import { api } from "@/ui/lib/axios";

interface GetExpenseInPeriodResponse {
  expense: number
}

export async function getExpenseInPeriod() {
  const response = await api.get<GetExpenseInPeriodResponse>('/metrics/expense')

  return response.data
}