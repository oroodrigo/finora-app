import { IncomeIcon } from "@/ui/components/icons/income-icon";
import { formatToCurrency } from "@/ui/lib/utils";
import { ChevronUp } from "lucide-react";

export function RevenueCard() {
  return (
    <div className="flex flex-row items-center justify-center gap-2 border shadow-lg bg-background-900 border-background-600 rounded-md p-4 h-32 max-w-80 w-full">
      <div className="flex items-center justify-center border border-accent-green rounded-md h-12 w-12">
        <IncomeIcon className="text-accent-green"/>
      </div>
      <div>
        <h3 className="text-base text-text-500">Entrada</h3>
        <p className="text-lg">
          {formatToCurrency(395400)} 
          <span className="text-accent-green/70"> +5%<ChevronUp className="inline"/></span>
        </p>
      </div>
    </div>
  )
}