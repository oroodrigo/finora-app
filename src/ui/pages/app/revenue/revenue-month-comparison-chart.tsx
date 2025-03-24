import { DataKey, MonthComparisonChart } from "@/ui/components/chart/month-comparison-chart"
import { Card, CardContent, CardHeader, CardTitle } from "@/ui/components/ui/card"
import { ChartConfig } from "@/ui/components/ui/chart"
import { COLORS } from "@/ui/styles/chart-tokens"

interface RevenueData {
  month: string
  income: number
  expense: number
}

const data: RevenueData[] = [
  { month: "Janeiro", income: 186, expense: 80 },
  { month: "Fevereiro", income: 305, expense: 200 },
  { month: "Março", income: 237, expense: 120 },
  { month: "Abril", income: 73, expense: 190 },
  { month: "Maio", income: 209, expense: 130 },
  { month: "Junho", income: 214, expense: 140 },
]

const chartConfig = {
  income: {
    label: "Entrada",
    color: COLORS.primary,
  },
  expense: {
    label: "Saída",
    color: COLORS.secondary,
  },
} satisfies ChartConfig

const dataKeys = {
  primaryBar: 'expense',
  xAxys: 'month',
} satisfies DataKey<RevenueData>

export function RevenueMonthComparisonChart() {
  return (
    <Card className="w-1/2 2xl:min-w-[600px] 2xl:w-3/5 h-80">
      <CardHeader>
        <div className="flex items-center justify-between w-full">
          <CardTitle className="text-text-200 text-xl font-medium">Comparação Mensal</CardTitle>
          <span className="flex items-center gap-2 text-sm 2xl:text-base">
            <div className="h-3 w-3 2xl:h-4 2xl:w-4 bg-primary rounded-full"/>
            Entrada
          </span>
        </div>
      </CardHeader>
      <CardContent className="w-full flex-1">
        <MonthComparisonChart dataKey={dataKeys} chartData={data} chartConfig={chartConfig}/>
      </CardContent>
    </Card>
  )
}