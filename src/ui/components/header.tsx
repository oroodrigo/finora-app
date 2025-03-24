import { Bell, Search, X } from "lucide-react";
import { Avatar } from "./avatar";
import { Input } from "./ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { useQuery } from '@tanstack/react-query'
import { getProfile } from "../api/get-profile";

export function Header() {
  const { data: profile, isLoading: isLoadingProfile } = useQuery({
    queryFn: getProfile,
    queryKey: ['profile'],
    staleTime: Infinity,
  })

  return (
    <header className="flex min-h-32 select-none">
      <section className="flex items-center justify-between w-full bg-background-900 border-background-600 p-4">
        <section className="flex gap-3 items-center">
          <Avatar.Root>
            <Avatar.Image src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250"/>
            <Avatar.Status status="online"/>
          </Avatar.Root>

          <section>
            <strong className="text-lg text-text-100">{ isLoadingProfile ? 'Carregando...' : profile?.name}</strong>
            <p className="text-sm text-text-500">Olá, bem vindo de volta!</p>
          </section>
        </section>

        <section className="flex items-center gap-4">
          <form className="flex items-center border border-background-600 bg-transparent text-base shadow-sm rounded-md">
            <Input
              placeholder="Pesquisar"
              className="border-0 outline-0 ring-0 focus-visible:ring-0 focus-visible:outline-0 placeholder:text-text-500 px-2 w-52"
            />
            <Button variant='ghost' className="hover:bg-background-600/20" size='icon'>
              <Search className="cursor-pointer text-text-500"/>
            </Button>
          </form>

          <Popover>
            <PopoverTrigger asChild>
              <Button className="bg-transparent hover:bg-background-600/40 hover:text-text-100" variant='ghost' size='icon'>
                <Bell/>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="mr-4 min-w-[520px] min-h-96 bg-background-900 border-background-800 text-text-100">
              <h4 className="text-text-200 mb-2 font-semibold text-xl">Notificações</h4>
              <Separator/>

              <section className="flex flex-col w-full mt-2">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex flex-col gap-1">
                    <strong className="text-base font-medium">Novos ativos encontrados e atualizados da carteira "Bybit".</strong>
                    <span className="text-xs text-text-500">Recebida há 3 minutos</span>
                  </div>

                  <Button variant='ghost' size='icon' className="hover:bg-red-500 hover:text-text-100">
                    <X/>
                  </Button>
                </div>
              </section>
            </PopoverContent>
          </Popover>
        </section>
      </section>
    </header>
  )
}

// "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250"