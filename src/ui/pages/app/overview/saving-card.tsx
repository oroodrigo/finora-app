import { ProgressBar } from "@/ui/components/progress-bar";
import { formatToCurrency } from "@/ui/lib/utils";
import { PiggyBank } from "lucide-react";

export function SavingCard() {
  const progress = 52

  return (
    <div className="flex flex-row items-center justify-center gap-2 border shadow-lg bg-background-900 border-background-600 rounded-md p-4 h-32 max-w-80 w-full">
      <div className="flex items-center justify-center border border-secondary rounded-md h-12 w-12">
        <PiggyBank className="text-secondary"/>
      </div>
      <div className="w-40">
        <h3 className="text-base text-text-500">Reservas</h3>
        <p className="text-lg">{formatToCurrency(395400)}</p>

        <div className="flex flex-row items-center justify-center gap-2 w-full h-full ">
          <ProgressBar progress={progress}/>
          <span className="text-secondary text-sm">{progress}%</span>
        </div>
      </div>
    </div>
  )
}