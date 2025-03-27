import { api } from "@/ui/lib/axios";
import { CategoryDistribution } from "../types";

interface GetExpenseInPeriodResponse {
  distribution: CategoryDistribution[]
}

export interface GetDailyRevenueInPeriodQuery {
  from?: Date
  to?: Date
}

export async function getExpenseDistributionInPeriod({ 
  from,
  to
}: GetDailyRevenueInPeriodQuery) {
  const response = await api.get<GetExpenseInPeriodResponse>(
    '/metrics/expense-distribution', 
    {
      params: {
        from,
        to
      } 
    })

  return response.data.distribution
}