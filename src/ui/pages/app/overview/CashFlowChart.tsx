import { Card, CardContent, CardHeader, CardTitle } from "@/ui/components/ui/card"
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/ui/components/ui/chart"
import { formatToCurrency } from "@/ui/lib/utils"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"

const COLORS = {
  income: "#E35509",
  expense: "#C7C7C7",
  grid: "#494949",
}

const chartData = [
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
    color: COLORS.income,
  },
  expense: {
    label: "Saída",
    color: COLORS.expense,
  },
} satisfies ChartConfig

export function CashFlowChart() {
  const incomeIsGreaterThanExpense = chartData.reduce((acc, curr) => acc + curr.income, 0) >
  chartData.reduce((acc, curr) => acc + curr.expense, 0);

  return (
    <Card className="w-1/2 2xl:min-w-[600px] 2xl:w-3/5 h-80">
      <CardHeader>
        <div className="flex items-center justify-between w-full">
          <CardTitle className="text-text-200 text-xl font-medium">Fluxo de Caixa</CardTitle>
            <section className="flex items-center justify-center gap-4 text-sm 2xl:text-base">
              <span className="flex items-center gap-2">
                <div className="h-3 w-3 2xl:h-4 2xl:w-4 bg-primary rounded-full"/>
                Entrada
              </span>
              <span className="flex items-center gap-2">
                <div className="h-3 w-3 2xl:h-4 2xl:w-4 bg-text-200 rounded-full"/>
                Saída
              </span>
            </section>
        </div>
      </CardHeader>
      <CardContent className="w-full flex-1">
        <ChartContainer config={chartConfig} className="mx-auto w-full max-h-56 p-0 m-0">
          <BarChart accessibilityLayer data={chartData} barCategoryGap="20%">
            <CartesianGrid vertical={false} stroke={COLORS.grid} strokeDasharray="7 10"/>
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis
              dataKey={`${incomeIsGreaterThanExpense ? "income" : "expense"}`}
              tickLine={false}
              tickMargin={4}
              axisLine={false}
              tickFormatter={(value) => formatToCurrency(value *  100)}
            />
            <ChartTooltip
              cursor={{ fill: "rgb(255, 255, 255, 0.05)", rx: 4 }}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Bar dataKey="income" fill={COLORS.income} radius={4}  maxBarSize={35}/>
            <Bar dataKey="expense" fill={COLORS.expense} radius={4} maxBarSize={35} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}