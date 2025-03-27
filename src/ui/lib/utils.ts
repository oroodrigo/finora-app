import { clsx, type ClassValue } from "clsx"
import { Blocks, ChartNoAxesGantt, Landmark, PiggyBank, Settings } from "lucide-react"
import { twMerge } from "tailwind-merge"
import { IncomeIcon } from "../components/icons/income-icon"
import { ExpenseIcon } from "../components/icons/expense-icon"
import { format } from "date-fns"
import { ptBR } from "date-fns/locale"

export const SideBarItems = {
  menu: [
    {
      id: 1,
      text: 'Visão Geral',
      icon: ChartNoAxesGantt,
      path: '/'
    },
    {
      id: 2,
      text: 'Entrada',
      icon: IncomeIcon,
      path: '/revenue'
    },
    {
      id: 3,
      text: 'Saída',
      icon: ExpenseIcon,
      path: '/expenses'
    },
    {
      id: 4,
      text: 'Investimentos',
      icon: Landmark,
      path: '/investments'
    },
    {
      id: 5,
      text: 'Reservas',
      icon: PiggyBank,
      path: '/savings'
    },
  ],
  general: [
    {
      id: 1,
      text: 'Integrações',
      icon: Blocks,
      path: '/integrations'
    },
    {
      id: 2,
      text: 'Configurações',
      icon: Settings,
      path: '/settings'
    },
  ]
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function formatToCurrency(amount: number | string) {
  const amountConverted = Number(amount)

  return Intl.NumberFormat('pt-br', {
    currency: 'BRL',
    style: 'currency'
  })
  .format(amountConverted / 100)
}

export function formatDateName(date: Date, formatStr: string, end?: number) {
  const formattedName = format(date, formatStr , { locale: ptBR })
  const firstLetterCapitalized = formattedName.substring(0,1).toLocaleUpperCase()

  return firstLetterCapitalized + formattedName.substring(1, end)
}