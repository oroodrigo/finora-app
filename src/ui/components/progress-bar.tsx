import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip"
import { useMouse } from "@/ui/hooks/useMouse";

interface ProgressBarProps {
  progress: number
  tooltip?: boolean
}

export function ProgressBar({ progress, tooltip }: ProgressBarProps) {
  const { ref, x, y } = useMouse<HTMLDivElement>();

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <section className="w-full h-3 flex flex-col justify-end" ref={ref}>
          <div className="h-1 w-full rounded-full bg-background-800"/>
          <div className="relative -top-1 h-1 rounded-full bg-secondary" style={{ width: `${progress}%` }}/>
        </section>
      </TooltipTrigger>
      { tooltip && 
        <TooltipContent align="start" alignOffset={x - 20} sideOffset={-y + 15} className="relative bg-background-800 overflow-visible">
          <div className="absolute h-3 w-3 -bottom-1 translate-x-2 bg-background-800 block rotate-45"/>
          <p className="text-base text-secondary">{progress}%</p>
        </TooltipContent>
      }
    </Tooltip>
  )
}