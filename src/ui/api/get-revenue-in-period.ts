import { api } from "@/ui/lib/axios";

interface GetRevenueInPeriodResponse {
  revenue: number
}

export async function getRevenueInPeriod() {
  const response = await api.get<GetRevenueInPeriodResponse>('/metrics/revenue')

  return response.data
}