import { ChevronRight } from "lucide-react"
import React from "react"
import { Link } from "react-router"

interface MenuItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
  icon: React.ElementType
  path: string
  active?: boolean
}

export function MenuItem({icon: Icon, children, active, path, ...props}: MenuItemProps) {
  return active ? (
    <Link to={path}>
      <li className="flex justify-between bg-secondary transition-colors mt-2 p-1 rounded-md text-base cursor-pointer" {...props}>
        <div className="flex gap-2 items-center">
        <Icon/>
        {children}
        </div>
        <ChevronRight/> 
      </li>
    </Link>
  ) : (
    <Link to={path}>
      <li className="flex gap-2 items-center hover:bg-secondary transition-colors mt-2 p-1 rounded-md text-base cursor-pointer" {...props}>
        <Icon/>
        {children}
      </li>
    </Link>
  )
}