import { formatToCurrency } from "@/ui/lib/utils";
import { ChevronUp, Landmark } from "lucide-react";

export function InvestmentCard() {
  return (
    <div className="flex flex-row items-center justify-center gap-2 border shadow-lg bg-background-900 border-background-600 rounded-md p-4 h-32 max-w-80 w-full">
      <div className="flex items-center justify-center border border-text-500 rounded-md h-12 w-12">
        <Landmark className="text-text-500"/>
      </div>
      <div>
        <h3 className="text-base text-text-500">Investimentos</h3>
        <p className="text-lg">
          {formatToCurrency(0)}
          <span className="text-accent-green/70"> +0%<ChevronUp className="inline"/></span>
        </p>
      </div>
    </div>
  )
}