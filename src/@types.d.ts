interface Window {
  electron: {
    close: () => void
    minimize: () => void
    toggleMaximize: () => void
    setToken: (jwt: string) => void
    getToken: () => Promise<string | null>
    clearToken: () => void
  }
}