import { WifiOff } from "lucide-react"

interface AvatarStatusProps {
  status: 'online' | 'offline'
}

export function AvatarStatus({ status }: AvatarStatusProps) {
  return status === 'online' ? (
    <div className="h-7 w-7 absolute -right-2 -bottom-1 border-background-900 border-4 bg-accent-green rounded-full"/>
  ) : (
    <div className="flex items-center justify-center h-7 w-7 absolute -right-2 -bottom-1 border-background-900 border-4 bg-secondary rounded-full">
      <WifiOff className="w-3 h-3"/>
    </div>
  )
}