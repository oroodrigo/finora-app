import { getExpenseInPeriod } from "@/ui/api/get-expense-in-period";
import { ExpenseIcon } from "@/ui/components/icons/expense-icon";
import { formatToCurrency } from "@/ui/lib/utils";
import { useQuery } from "@tanstack/react-query";
import { ChevronDown } from "lucide-react";

export function ExpenseCard() {
  const { data: expenseInPeriod } = useQuery({
    queryFn: getExpenseInPeriod,
    queryKey: ['overview', 'expense']
  })


  return (
    <div className="flex flex-row items-center justify-center gap-2 border shadow-lg bg-background-900 border-background-600 rounded-md p-4 h-32 max-w-80 w-full">
      <div className="flex items-center justify-center border border-accent-red rounded-md h-12 w-12">
        <ExpenseIcon className="text-accent-red"/>
      </div>
      <div>
        <h3 className="text-base text-text-500">Saída</h3>
        <p className="text-lg">
          { expenseInPeriod ? formatToCurrency(expenseInPeriod.expense) : 0} 
          <span className="text-accent-red/70"> +5%<ChevronDown className="inline"/></span>
        </p>
      </div>
    </div>
  )
}