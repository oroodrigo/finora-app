import { AssetProfitability, AssetProfitabilityProps } from "@/ui/components/asset-profitability";
import { Card, CardContent, CardHeader, CardTitle } from "@/ui/components/ui/card";
import { Clock}  from "lucide-react";

const ETHImage = "data:image/png;base64,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"

const assets: AssetProfitabilityProps[] = [
  { abbreviation: 'ETH', imageUrl: ETHImage, name: 'Ethereum', quantity: 0.14907, quotation: 2175.62 },
  { abbreviation: 'ETH', imageUrl: ETHImage, name: 'Ethereum', quantity: 0.14907, quotation: 2175.62 },
  { abbreviation: 'ETH', imageUrl: ETHImage, name: 'Ethereum', quantity: 0.14907, quotation: 2175.62 },
]

export function MostProfitableAssets() {
  return (
    <Card className="w-1/2 2xl:min-w-[600px] 2xl:w-3/5 h-80">
      <CardHeader>
        <div className="flex items-center justify-between w-full">
          <CardTitle className="text-text-200 text-xl font-medium">Maiores Valorizações</CardTitle>
            <section className="flex items-center justify-center gap-1 bg-tertiary p-2 rounded-md">
              <Clock className="h-4"/>
              <span className="text-sm">Atualizado há 7 minutos</span>
            </section>
        </div>
      </CardHeader>
      <CardContent className="w-full h-full ">
        <ul className="w-full space-y-4">
          {assets.map(item => {
            return <AssetProfitability 
              key={item.abbreviation}
              abbreviation={item.abbreviation} 
              name={item.name} 
              imageUrl={item.imageUrl} 
              quantity={item.quantity} 
              quotation={item.quotation}
              />
          })}
        </ul>
      </CardContent>
    </Card>
  )
}