import { Button } from "./ui/button";

interface IntegrationCardProps {
  image: string
  connectFlow: () => void
  disconnectFlow: () => void
  connected?: boolean
}

export function IntegrationCard({ image, connectFlow, disconnectFlow, connected }:IntegrationCardProps) {
  return (
    <div className="flex flex-w items-center justify-between w-full max-h-20 p-4 rounded-md bg-background-900 border border-background-600 shadow-md">
      <div className="flex gap-2 items-center">
        <img alt="Logo da Bybit" src={image} className="h-12 w-12 rounded-sm" />
        <div className="flex flex-col">
          <h2 className="text-lg font-medium">ByBit</h2>
          <p className="text-sm text-text-500">Corretora de criptomoedas</p>
        </div>
      </div>
      {
        !connected ? (
          <Button variant='default' onClick={connectFlow}>Vincular</Button>
        ) : (
          <Button variant='destructive' onClick={disconnectFlow}>Desvincular</Button>
        )
      }
    </div>
  )
}