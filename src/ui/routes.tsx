
import { NotFound } from './pages/404'
import { Error } from './pages/error'
import { Overview } from './pages/app/overview/overview'
import { createHashRouter } from 'react-router'
import { AppLayout } from './pages/_layout/app'
import { Integrations } from './pages/app/integrations/integrations'
import { Expenses } from './pages/app/expense/expense'
import { Savings } from './pages/app/savings/savings'
import { Income } from './pages/app/revenue/revenue'
import { Investments } from './pages/app/investments/investiments'
import { Settings } from './pages/app/settings/savings'
import { AuthLayout } from './pages/_layout/auth'
import { SignUp } from './pages/auth/sign-up'
import { SignIn } from './pages/auth/sign-in'

export const router = createHashRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: '/', element: <Overview /> },
      { path: '/revenue', element: <Income />},
      { path: '/expenses', element: <Expenses />},
      { path: '/investments', element: <Investments />},
      { path: '/savings', element: <Savings />},
      { path: '/integrations', element: <Integrations />},
      { path: '/settings', element: <Settings />},
    ],
  },
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      { path: '/sign-in', element: <SignIn /> },
      { path: '/sign-up', element: <SignUp /> },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
])
