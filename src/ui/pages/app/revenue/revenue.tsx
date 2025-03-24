import { DatePicker } from "@/ui/components/date-picker";
import { RevenueDistributionChart } from "./revenue-distribution-chart";
import { RevenueMonthComparisonChart } from "./revenue-month-comparison-chart";
import { RevenueProgressChart } from "./revenue-progress-chart";
import { Button } from "@/ui/components/ui/button";
import { PlusIcon } from "lucide-react";

export function Income() {
  return (
    <>
      <div className="flex flex-1 flex-col gap-4 p-4 bg-background-850 rounded-md overflow-y-auto scrollbar scrollbar-track-background-850 scrollbar-thumb-background-600">
        <header className="flex items-center justify-between w-full">
          <h1 className="text-2xl font-bold text-text-200 tracking-tight">Atividades de Entrada</h1>
          <section className="flex gap-4">
            <Button>
              Nova entrada
              <PlusIcon className="text-white"/>
            </Button>
            <DatePicker/>
          </section>
        </header>
        <section className="flex flex-col items-start w-full h-full gap-8">
          <section className="flex w-full gap-8">
            <RevenueProgressChart/>
            <RevenueDistributionChart/>
          </section>
          <RevenueMonthComparisonChart/>
        </section>
      </div>
    </>
  )
}