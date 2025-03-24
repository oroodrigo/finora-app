import { CartesianGrid, DotProps, Line, LineChart, XAxis, YAxis } from "recharts"
import {
  Card,
  CardContent,  
  CardHeader,
  CardTitle,
} from "@/ui/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/ui/components/ui/chart"
import { COLORS } from "@/ui/styles/chart-tokens"
import { formatToCurrency } from "@/ui/lib/utils"
import { useState } from "react"

const chartData = [
  { month: "Janeiro", currentWeek: 186, pastWeek: 80 },
  { month: "Fevereiro", currentWeek: 130, pastWeek: 200 },
  { month: "Março", currentWeek: 237, pastWeek: 120 },
  { month: "Abril", currentWeek: 73, pastWeek: 190 },
  { month: "Maio", currentWeek: 209, pastWeek: 130 },
  { month: "Junho", currentWeek: 214, pastWeek: 140 },
]
const chartConfig = {
  currentWeek: {
    label: "Semana atual",
    color: COLORS.primary,
  },
  pastWeek: {
    label: "Semana anterior",
    color: COLORS.secondary,
  },
} satisfies ChartConfig

function CustomActiveDot({ cx, cy }: DotProps ) {
  return (
    <circle
      cx={cx}
      cy={cy}
      r={8}
      fill={COLORS.primary}
      stroke="white"
      strokeWidth={2} 
    />
  )
};

export function RevenueProgressChart() {
  const [activeLine, setActiveLine] = useState<string>('currentWeek')

  const handleMouseEnterLine = (line: string) => {
    setActiveLine(line)
  }

  const currentWeekIsGreaterThanPast = chartData.reduce((acc, curr) => acc + curr.currentWeek, 0) >
  chartData.reduce((acc, curr) => acc + curr.pastWeek, 0);

  return (
    <Card className="w-1/2 2xl:min-w-[600px] 2xl:w-3/5 h-80">
      <CardHeader>
        <div className="flex items-center justify-between w-full">
          <CardTitle className="text-text-200 text-xl font-medium">Progresso de Entradas</CardTitle>
            <section className="flex items-center justify-center gap-4 text-sm 2xl:text-base">
              <span className="flex items-center gap-2">
                <div className="h-3 w-3 2xl:h-4 2xl:w-4 bg-primary rounded-full"/>
                Semana atual
              </span>
              <span className="flex items-center gap-2">
                <div className="h-3 w-3 2xl:h-4 2xl:w-4 bg-text-200 rounded-full"/>
                Semana anterior
              </span>
            </section>
        </div>
      </CardHeader>
      <CardContent className="w-full flex-1">
        <ChartContainer className="mx-auto w-full max-h-56 p-0 m-0" config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 20,
              left: 12,
              right: 12,
              bottom: 10,
            }}
          >
            <CartesianGrid vertical={false} stroke={COLORS.grid} strokeDasharray="7 10" />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis
              dataKey={`${currentWeekIsGreaterThanPast ? "currentWeek" : "pastWeek"}`}
              tickLine={false}
              tickMargin={4}
              axisLine={false}
              tickFormatter={(value) => formatToCurrency(value *  100)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Line
              dataKey="currentWeek"
              type="monotone"
              stroke={COLORS.primary}
              strokeWidth={2}
              dot={false}
              activeDot={activeLine === 'currentWeek' ? <CustomActiveDot/> : false}
              onMouseEnter={() => handleMouseEnterLine('currentWeek')}
            />
            <Line
              dataKey="pastWeek"
              type="monotone"
              stroke={COLORS.secondary}
              strokeWidth={2}
              dot={false}
              activeDot={activeLine === 'pastWeek' ? <CustomActiveDot/> : false}
              onMouseEnter={() => handleMouseEnterLine('pastWeek')}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}