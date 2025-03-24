import { ReactNode } from "react"

interface AvatarRootProps {
  children: ReactNode
}

export function AvatarRoot({ children }: AvatarRootProps) {
  return (
    <div className="relative">
      {children}
    </div>
  )
}







