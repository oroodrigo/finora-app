interface ChartLegendItemProps {
  color: string,
  category: string,
  percentage: string
}

export function ChartLegendItem({ color, percentage, category }: ChartLegendItemProps) {
  return (
    <li className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <span className="w-3 h-3 rounded-[2px]" style={{ backgroundColor: color }}/>
        <span>{category}</span>
      </div>
      <span className="text-text-500">{percentage}%</span>
    </li>
  )
}