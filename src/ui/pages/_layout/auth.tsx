import { TopBar } from '@/ui/components/topbar'
import { ChartNoAxesGantt } from 'lucide-react'
import { Outlet } from 'react-router'

export function AuthLayout() {
  return (
    <div className="flex flex-col h-screen antialiased">
    <TopBar/>
    <div className="grid flex-1 overflow-y-hidden grid-cols-2 antialiased bg-background-900 text-text-200">
      <div className="flex h-full flex-col justify-between border-r border-background-600/60 bg-muted p-10 text-muted-foreground">
        <div className="flex items-center gap-3 text-lg font-medium text-foreground">
          <ChartNoAxesGantt className="h-5 w-5" />
          <span>Finora</span>
        </div>
        <footer className="text-sm">
          Dashbord Financeiro &copy; Finora - {new Date().getFullYear()}
        </footer>
      </div>
      <div className="relative flex flex-col items-center justify-center">
        <Outlet />
      </div>
    </div>
    </div>
  )
}
