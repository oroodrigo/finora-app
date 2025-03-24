import { Header } from '@/ui/components/header'
import { SideBar } from '@/ui/components/sidebar'
import { TopBar } from '@/ui/components/topbar'
import { api } from '@/ui/lib/axios'
import { isAxiosError } from 'axios'
import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router'

export function AppLayout() {
  const navigate = useNavigate()

  useEffect(() => {
    const interceptorId = api.interceptors.response.use(
      (response) => response,
      (error) => {
        if (isAxiosError(error)) {
          const status = error.response?.status

          if (status === 401) {
            navigate('/sign-in', { replace: true })
          } else {
            throw error
          }
        }
      },
    )

    return () => {
      api.interceptors.response.eject(interceptorId)
    }
  }, [navigate])

  return (
    <div className="flex flex-col h-screen antialiased">
      <TopBar/>
      <div className="bg-background-900 flex flex-1 overflow-y-hidden text-text-100">
        <SideBar/>
        <div className="flex flex-col h-full w-full">
          <Header/>
          <Outlet />
        </div>
      </div>
    </div>
  )
}
