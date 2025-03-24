import BybitLogo from '@/ui/assets/bybit-logo.png'
import { IntegrationCard } from "@/ui/components/integration-card";

export function Integrations() {
  async function handleBybitIntegrationFlow() {
    console.log('Bybit Integration Flow')
  }

  return (
    <div className="flex flex-col flex-1 gap-4 p-4 bg-background-850 rounded-lg">
      <h1 className="text-2xl font-bold text-text-200">Integrações</h1>

      <main className="grid grid-cols-2 2xl:grid-cols-3 gap-y-4 gap-x-4">
        <IntegrationCard image={BybitLogo} connectFlow={handleBybitIntegrationFlow} disconnectFlow={handleBybitIntegrationFlow}/>
      </main>
    </div>
  )
}