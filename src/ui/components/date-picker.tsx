import * as React from "react"
import { addMonths, format } from "date-fns"
import { CalendarIcon } from "lucide-react"

import { cn } from "@/ui/lib/utils"
import { Button } from "@/ui/components/ui/button"
import { Calendar } from "@/ui/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/ui/components/ui/popover"
import { DateRange } from "react-day-picker"
import { ptBR } from 'date-fns/locale'

export function DatePicker({
  className,
}: React.HTMLAttributes<HTMLDivElement>) {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(new Date().setDate(1)),
    to: addMonths(new Date().setDate(1), 1),
  })

  function formatDateName(date: Date, formatStr: string, end?: number) {
    const formattedName = format(date, formatStr , { locale: ptBR })
    const firstLetterCapitalized = formattedName.substring(0,1).toLocaleUpperCase()

    return firstLetterCapitalized + formattedName.substring(1, end)
  }

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "max-w-[300px] justify-start text-left font-normal hover:bg-zinc-100/20 hover:text-text-100",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon />
            {date?.from ? (
              date.to ? (
                <>
                  {formatDateName(date.from, "LLL dd, y")} -{" "}
                  {formatDateName(date.to, "LLL dd, y")}
                </>
              ) : (
                formatDateName(date.from, "LLL dd, y")
              )
            ) : (
              <span>Selecione um intervalo</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0 mr-6 bg-background-900 text-text-100 border-background-600" align="start">
          <Calendar
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
            locale={ptBR}
            formatters={{
              formatCaption: (date) => formatDateName(date, 'MMMM'),
              formatWeekdayName: (date) => formatDateName(date, 'eee', 3)
            }}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}

