import { ChevronUp, EqualApproximately } from "lucide-react";
import { Separator } from "./ui/separator";
import { formatToCurrency } from "../lib/utils";

export interface AssetProfitabilityProps {
  imageUrl: string
  abbreviation: string
  name: string
  quantity: number
  quotation: number
}

export function AssetProfitability({ imageUrl, abbreviation, name, quantity, quotation }: AssetProfitabilityProps) {
  return (
    <li className="flex items-center gap-4">
      <img 
        src={imageUrl}
        alt="Asset Logo" 
        className="h-14 w-14 rounded-full"
      />

      <section>
        <strong>{abbreviation}</strong>
        <p className="text-text-500">{name}</p>
      </section>

      <Separator className="border-t-2 border-dashed border-background-900 w-auto flex-1"/>

      <section className="flex items-center gap-2">
        <section className="text-right">
          <strong className="font-normal">{quantity}</strong>
          <span className="flex items-center text-text-500 text-xs">
            <EqualApproximately className="h-4"/>
            {formatToCurrency(quantity * quotation * 100)}
          </span>
        </section>

        <span className="flex items-center text-accent-green/70">
          + 5% 
          <ChevronUp/>
        </span>
      </section>
    </li>
  )
}