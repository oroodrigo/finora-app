import { RouterProvider } from "react-router"
import { router } from "./routes"
import { TooltipProvider } from "./components/ui/tooltip"
import { QueryClientProvider } from "@tanstack/react-query"
import { queryClient } from "./lib/react-query"
import { Toaster } from "sonner"

function App() {  
  return (
    <>
      <Toaster richColors position="bottom-right" />
      <QueryClientProvider client={queryClient}>
        <TooltipProvider delayDuration={300}>
          <RouterProvider router={router} />
        </TooltipProvider>
      </QueryClientProvider>
    </>
  )
}

export default App
