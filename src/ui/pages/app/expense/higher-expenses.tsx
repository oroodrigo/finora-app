import { Card, CardContent, CardHeader, CardTitle } from "@/ui/components/ui/card";
import { Separator } from "@/ui/components/ui/separator";
import { formatToCurrency } from "@/ui/lib/utils";
import {  ChevronUp } from "lucide-react";

const assets: {
  id: string,
  name: string,
  category: string,
  amount: number
}[] = [
  { id: '1', name: 'Faculdade', category: 'Educação', amount: 217562 },
  { id: '2', name: 'Ifood', category: 'Alimentação', amount: 217562 },
  { id: '3', name: 'Passagem', category: 'Transporte', amount: 217562 },
]

export function HigherExpenses() {
  return (
    <Card className="w-1/2 2xl:min-w-[600px] 2xl:w-3/5 h-80">
      <CardHeader>
          <CardTitle className="text-text-200 text-xl font-medium">Maiores Gastos</CardTitle>
      </CardHeader>
      <CardContent className="w-full h-full ">
        <ol className="w-full space-y-4 list-decimal list-inside">
          {assets.map(item => {
            return (
              <div 
                className="flex items-start w-full before:content-[counter(list-item,decimal)'.'] before:text-text-200 before:mr-2"
                style={{ counterIncrement: "list-item" }}
                key={item.name}
              >
                <li className="flex flex-1 items-center gap-4">
                  <section>
                    <strong className="tracking-wide">{item.name}</strong>
                    <p className="text-sm text-text-500">{item.category}</p>
                  </section>

                  <Separator className="border-t-2 border-dashed border-background-900 w-auto flex-1"/>

                  <section className="flex items-center gap-2">
                    <strong className="font-normal text-right">{formatToCurrency(item.amount)}</strong>

                    <span className="flex items-center text-accent-green/70">
                      + 5% 
                      <ChevronUp/>
                    </span>
                  </section>
                </li>
              </div>
            )
          })}
        </ol>
      </CardContent>
    </Card>
  )
}