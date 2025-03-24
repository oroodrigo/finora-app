import { Minus, Square, X } from "lucide-react";
import { WindowsButton } from "./windows-button";
import AppLogo from "@/../desktopIcon.png"
import { useElectron } from "@/ui/hooks/useElectron";

export function TopBar() {
  const { handleCloseWindow, handleMaximize, handleMinimize } = useElectron()

  return (
  <div id="title-bar" className="w-full min-h-8 flex items-center bg-zinc-950/95 text-text-100">
    <img src={AppLogo} alt="App Logo" className="h-4 ml-4"/>
    <strong className="font-normal text-sm text-text-500 ml-2">Finora</strong>
    <div className="flex-1 w-full h-full draggable"/>
    <div>
      <WindowsButton onClick={handleMinimize}>
        <Minus/>
      </WindowsButton>

      <WindowsButton onClick={handleMaximize}>
        <Square />
      </WindowsButton>

      <WindowsButton className="hover:bg-red-600 hover:text-text-100" onClick={handleCloseWindow}>
        <X/>
      </WindowsButton>
    </div>
  </div>)
}