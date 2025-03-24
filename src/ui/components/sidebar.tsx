import { LogOut } from "lucide-react";
import { Button } from "./ui/button";
import { MenuItem } from "./menu-item";
import { SideBarItems } from "../lib/utils";
import { useLocation, useNavigate } from "react-router";
import { Separator } from "./ui/separator";
import { useElectron } from "../hooks/useElectron";
import { queryClient } from "../lib/react-query";

export function SideBar() {
  const { pathname: path } = useLocation()
  const navigate = useNavigate()
  const { clearToken } = useElectron()

  function handleLogOut() {
    clearToken()
    navigate('/sign-in', { replace: true })
    queryClient.invalidateQueries({queryKey: ['profile']})
  }

  return (
    <div className="flex flex-col justify-between border-background-600 border-0 border-t-0 h-full min-w-64 p-3 pt-0 select-none text-base">
      <section className="flex flex-col items-center justify-center min-h-32 border-background-600">
        <h1 className="text-4xl font-bold">Finora</h1>
        <h2 className="text-sm font-normal text-text-500">Dashboard Financeiro</h2>
      </section>
      <nav className="flex-1 p-3">
        <h2 className="text-text-500 font-medium">Menu</h2>
        <ul className="mt-2 text-text-100 mb-28">
          {SideBarItems.menu.map((item) => {
            return item.path === path ? (
              <MenuItem 
                active 
                key={item.id} 
                icon={item.icon} 
                path={item.path}>
                  {item.text}
                </MenuItem>
            ) : (
              <MenuItem 
                key={item.id} 
                icon={item.icon} 
                path={item.path}>
                  {item.text}
                </MenuItem>
            )
          })}
        </ul>

        <Separator className="bg-background-600"/>

        <h2 className="text-text-500 font-medium mt-5">Geral</h2>
        <ul className="mt-2 space-y-2 text-text-100">
          {SideBarItems.general.map((item) => {
            return <MenuItem key={item.id} icon={item.icon} path={item.path}>{item.text}</MenuItem>
          })}
        </ul>
      </nav>
      
      <Button 
        variant={"outline"} 
        className="bg-background-900 hover:bg-red-500 hover:border-red-500 hover:text-text-100 border-background-600 w-full text-sm font-normal tracking-wide"
        onClick={handleLogOut}
      >
        <LogOut/>
        Desconectar
      </Button>
    </div>
  )
}