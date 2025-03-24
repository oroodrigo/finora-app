import { DatePicker } from "@/ui/components/date-picker";
import { CashFlowChart } from "./CashFlowChart";
import { ExpenseCard } from "./ExpenseCard";
import { ExpenseOverviewChart } from "./ExpenseOverviewChart";
import { InvestmentCard } from "./InvestmentCard";
import { MostProfitableAssets } from "./MostProfitableAssets";
import { RevenueCard } from "./RevenueCard";
import { SavingCard } from "./SavingCard";
import { SavingsProgress } from "./SavingsProgress";

export function Overview() {
  return (
      <main className="flex flex-col gap-4 p-4 bg-background-850 rounded-md overflow-y-auto scrollbar scrollbar-track-background-850 scrollbar-thumb-background-600">
        <header className="flex items-center justify-between w-full">
          <h1 className="text-2xl font-bold text-text-200 tracking-tight">Visão Geral</h1>
          <DatePicker/>
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
