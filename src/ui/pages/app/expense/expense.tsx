import { DatePicker } from "@/ui/components/date-picker";
import { ExpenseProgressChart } from "./expense-progress-chart";
import { HigherExpenses } from "./higher-expenses";
import { ExpensesDistributionChart } from "./expenses-distribution-chart";
import { ExpenseMonthComparisonChart } from "./expense-month-comparison-chart";
import { NewTransactionModal } from "@/ui/components/modals/new-transaction-modal";
import { useState } from "react";
import { DateRange } from "react-day-picker";
import { addMonths } from "date-fns";

export function Expenses() {
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(new Date().setDate(1)),
    to: addMonths(new Date().setDate(1), 1),
  })
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 bg-background-850 rounded-md overflow-y-auto scrollbar scrollbar-track-background-850 scrollbar-thumb-background-600">
      <header className="flex items-center justify-between w-full">
        <h1 className="text-2xl font-bold text-text-200 tracking-tight">Atividades de Saída</h1>
        <section className="flex gap-4">
            <NewTransactionModal/>
            <DatePicker date={date} onDateChange={setDate}/>
          </section>
      </header>
      <section className="flex flex-col items-start w-full h-full gap-8">
        <section className="flex w-full gap-8">
          <ExpensesDistributionChart/>
          <ExpenseProgressChart/>
        </section>

        <section className="flex w-full gap-8">
          <ExpenseMonthComparisonChart/>
          <HigherExpenses/>
        </section>
      </section>
    </main>
  )
}