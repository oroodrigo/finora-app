import { ChartLegendItem } from "@/ui/components/chart/chart-legend-item"
import { Button } from "@/ui/components/ui/button"
import { Card, CardContent,CardHeader, CardTitle } from "@/ui/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from "@/ui/components/ui/chart"
import { Separator } from "@/ui/components/ui/separator"
import { formatToCurrency } from "@/ui/lib/utils"
import { MoveRight} from "lucide-react"
import { useMemo } from "react"
import { Link } from "react-router"
import { Label, Pie, PieChart } from "recharts"

const COLORS = [
  "#dc2626",
  "#ea580c",
  "#1d4ed8",
  "#5b21b6",
  "#2dd4bf",
]

const chartData = [
  { category: 'Lanche', amount: 213 },
  { category: 'Transporte', amount: 234 },
  { category: 'Mercado', amount: 525 },
  { category: 'Faculdade', amount: 432 },
  { category: 'Assinaturas', amount: 151 },
].map((item, index) => ({
  ...item,
  fill: COLORS[index] // Garante que não ultrapasse o tamanho do array
}));

const chartConfig = {
  expenses: {
    label: "Saídas",
  },
  lanche: {
    label: "lanche",
    color: "#2dd4bf",
  },
  transporte: {
    label: "transporte",
    color: "#ea580c",
  }
} satisfies ChartConfig

export function ExpenseOverviewChart() {
    const totalExpenseAmount = useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.amount, 0)
  }, [])
  

  return (
    <Card className="2xl:min-w-[560px] w-1/2 2xl:w-2/5 h-80">
      <CardHeader>
        <div className="flex items-center justify-between w-full">
          <CardTitle className="text-text-200 text-xl font-medium">Relatório de Saída</CardTitle>
          <Link to='/expenses'>
            <Button>
              Detalhes
              <MoveRight className="h-4"/>
            </Button>
          </Link>
        </div>
      </CardHeader>

      <CardContent className="flex flex-1 w-full items-center justify-center gap-20">
        <ChartContainer
          config={chartConfig}
          className="mx-auto w-full aspect-square max-h-52 p-0 m-0"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="amount"
              nameKey="category"
              innerRadius={64}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-text-100 text-lg font-bold"
                        >
                          {formatToCurrency(totalExpenseAmount * 100)}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="text-base fill-accent-red/70"
                        >
                          + 12%
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>

        <div className="w-full h-full">
          <ul className="h-full space-y-2">
            {chartData.map((item, index) => {
              const percentage = ((item.amount / totalExpenseAmount) * 100).toFixed(1)

              if (index < chartData.length - 1) {
                return (
                  <div key={item.category}>
                    <ChartLegendItem  color={item.fill} category={item.category} percentage={percentage} />
                    <Separator className="border-dashed border-t-2 border-background-900"/>
                  </div>
                )
              } else {
                return <ChartLegendItem key={item.category} color={item.fill} category={item.category} percentage={percentage} />
              }
            })}
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}