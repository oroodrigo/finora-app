import { DatePicker } from "@/ui/components/date-picker";

export function Investments() {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 bg-background-850 rounded-md overflow-y-auto scrollbar scrollbar-track-background-850 scrollbar-thumb-background-600">
      <header className="flex items-center justify-between w-full">
        <h1 className="text-2xl font-bold text-text-200 tracking-tight">Investimentos</h1>
        <DatePicker/>
      </header>
    </main>
  )
}