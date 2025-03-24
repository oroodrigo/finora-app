import { COLORS } from "@/ui/styles/chart-tokens";

import { CartesianGrid, XAxis, Bar, BarChart } from "recharts";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "../ui/chart";

export interface DataKey<T = undefined> {
  xAxys: T extends undefined ? string : keyof T
  yAxys?: T extends undefined ? string : keyof T
  primaryBar: T extends undefined ? string : keyof T
  secondBar?: T extends undefined ? string : keyof T
}

interface MonthComparisonChartProps {
  dataKey: DataKey
  chartData: unknown[]
  chartConfig: ChartConfig
}

export function MonthComparisonChart({ chartData, chartConfig, dataKey }: MonthComparisonChartProps) {
  return (
    <ChartContainer config={chartConfig} className="mx-auto w-full max-h-56 p-0 m-0">
      <BarChart accessibilityLayer data={chartData} barCategoryGap="20%">
        <CartesianGrid vertical={false} stroke={COLORS.grid} strokeDasharray="7 10"/>
        <XAxis
          dataKey={dataKey.xAxys as string}
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip
          cursor={{ fill: "rgb(255, 255, 255, 0.05)", rx: 4 }}
          content={<ChartTooltipContent indicator="line" />}
        />
        <Bar dataKey={dataKey.primaryBar as string} fill={COLORS.primary} radius={4}  maxBarSize={35}/>
        
        { dataKey.secondBar && 
          <Bar dataKey={dataKey.secondBar as string} fill={COLORS.secondary} radius={4} maxBarSize={35} />
        }
      </BarChart>
    </ChartContainer>
  )
}