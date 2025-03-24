import { ProgressBar } from "@/ui/components/progress-bar"
import { Button } from "@/ui/components/ui/button"
import { Card, CardContent,CardHeader, CardTitle } from "@/ui/components/ui/card"
import { formatToCurrency } from "@/ui/lib/utils"
import { MoveRight} from "lucide-react"
import { Link } from "react-router"



export function SavingsProgress() {
  const data = [
    {
      id: '1',
      name: 'VW Polo 2022',
      currentValue: 3423000,
      totalValue: 7423000,
    },
    {
      id: '2',
      name: 'Viagem Punta Cana',
      currentValue: 945000,
      totalValue: 1200000,
    },
    {
      id: '3',
      name: 'Reserva de Emergência',
      currentValue: 500000,
      totalValue: 1000000,
    },
  ]

  return (
    <Card className="2xl:min-w-[560px] w-1/2 2xl:w-2/5 h-80">
      <CardHeader>
        <div className="flex items-center justify-between w-full">
          <CardTitle className="text-text-200 text-xl font-medium">Progresso de Reservas</CardTitle>
          <Link to='/savings'>
            <Button>
              Ver todos
              <MoveRight className="h-4"/>
            </Button>
          </Link>
        </div>
      </CardHeader>

      <CardContent className="flex flex-col w-full items-center justify-around gap-8">
        {data.map((item) => {
          const progress = ((item.currentValue / item.totalValue) * 100).toFixed()

          return (
            <section className="w-full space-y-2" key={item.id}>
              <section className="flex justify-between">
                <h4 className="text-base text-text-200">{item.name}</h4>
                <p className="text-base text-text-100">{`${formatToCurrency(item.currentValue)} de ${formatToCurrency(item.totalValue)}`}</p>
              </section>

              <ProgressBar tooltip progress={Number(progress)}/>
            </section>
          )
        })}
      </CardContent>
    </Card>
  )
}