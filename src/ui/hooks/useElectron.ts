import { useCallback, useEffect, useState } from "react"

export function useElectron() {
  const [token, setToken] = useState<string | null>(null)

  const handleCloseWindow = useCallback(() => {
    window.electron.close()
  }, [])
  
  const handleMaximize = useCallback(() => {
    window.electron.toggleMaximize()
  }, [])
  
  const handleMinimize = useCallback(() => {
    window.electron.minimize()
  }, [])

  const saveToken = useCallback((jwt: string) => {
    window.electron.setToken(jwt)
    setToken(jwt);
  }, [])

  const loadToken = useCallback(async () => {
    const storedToken = await window.electron.getToken()
    setToken(storedToken);
  }, [])

  const clearToken = useCallback(() => {
    window.electron.clearToken()  
    setToken(null)
  }, [])

  useEffect(() => {
    loadToken();
  }, [])

  return {
    handleCloseWindow,
    handleMaximize,
    handleMinimize,
    saveToken,
    loadToken,
    clearToken,
    token
  }
}