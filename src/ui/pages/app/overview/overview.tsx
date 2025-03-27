import { DatePicker } from "@/ui/components/date-picker";
import { CashFlowChart } from "./cash-flow-chart";
import { ExpenseCard } from "./expense-card";
import { ExpenseOverviewChart } from "./expense-overview-chart";
import { InvestmentCard } from "./investment-card";
import { MostProfitableAssets } from "./most-profitable-assets";
import { RevenueCard } from "./revenue-card";
import { SavingCard } from "./saving-card";
import { SavingsProgress } from "./savings-progress";
import { useState } from "react";
import { DateRange } from "react-day-picker";
import { subDays } from "date-fns";

export function Overview() {
  const [date, setDate] = useState<DateRange | undefined>({
    from: subDays(new Date(), 7),
    to: new Date(),
  })

  return (
      <main className="flex flex-col gap-4 p-4 bg-background-850 rounded-md overflow-y-auto scrollbar scrollbar-track-background-850 scrollbar-thumb-background-600">
        <header className="flex items-center justify-between w-full">
          <h1 className="text-2xl font-bold text-text-200 tracking-tight">Visão Geral</h1>
          <DatePicker date={date} onDateChange={setDate}/>
        </header>

        <section className="flex flex-col items-center h-full w-full gap-8">
          <section className="flex flex-row justify-between gap-8 w-full">
            <RevenueCard/>
            <ExpenseCard/>
            <InvestmentCard/>
            <SavingCard/>
          </section>

          <section className="flex flex-col w-full h-full gap-8">
            <section className="flex w-full gap-8">
              <MostProfitableAssets/>
              <ExpenseOverviewChart/>
            </section>
            <section className="flex w-full gap-8">
              <SavingsProgress/>
              <CashFlowChart/>
            </section>
          </section>
        </section>
      </main>
  )
}
