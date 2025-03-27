
import { Dialog, DialogClose, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog"

import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { Controller, useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation, useQuery } from "@tanstack/react-query"
import { createTransaction } from "@/ui/api/create-transaction"
import { toast } from "sonner"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import { Button } from "../ui/button"
import { CalendarIcon, PlusIcon } from "lucide-react"
import { RadioGroup, RadioGroupItem } from "../ui/radio-group"
import { IncomeIcon } from "../icons/income-icon"
import { ExpenseIcon } from "../icons/expense-icon"
import { fetchCategories } from "@/ui/api/fetch-categories"
import { useState } from "react"
import { Calendar } from "../ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"
import { cn, formatDateName } from "@/ui/lib/utils"

const newIncomeForm = z.object({
  name: z.string().min(1, 'O campo descrição deve ser preenchido.'),
  type: z.enum(['income', 'outcome']),
  amount: z.number({invalid_type_error: 'O campo valor deve ser preenchido.'}).nonnegative('O valor deve ser positivo.').min(1, 'O valor tem que ser maior que 0.').multipleOf(0.01),
  categoryId: z.string(),
  date: z.date()
})

type NewIncomeForm = z.infer<typeof newIncomeForm>

export function NewTransactionModal() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const { 
    handleSubmit,
    register,
    control,
    reset,
    formState: { isSubmitting, errors }
  } = useForm<NewIncomeForm>({
    resolver: zodResolver(newIncomeForm),
    defaultValues: {
      type: 'income',
    }
  })

  const { data: categories } = useQuery({
    queryFn: fetchCategories,
    queryKey: ['categories']
  })

  const { mutateAsync: createTransactionFn } = useMutation({
    mutationFn: createTransaction,
  })

  async function handleNewIncome(data: NewIncomeForm) {
    const { amount, name, categoryId, type, date }= data

    try {
      await createTransactionFn({
        name,
        amount: amount * 100,  
        type: type,
        categoryId,
        date
      })

      setIsModalOpen(false)
      reset()
      toast.success('Transação criada com sucesso.')
    } catch (error) {
      toast.error('Houve um erro ao cadastrar a transação.')
    }
    
  }

  return (
    <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
      <DialogTrigger>
        <Button onClick={() => setIsModalOpen(true)}>
          Nova transação
          <PlusIcon className="text-white"/>
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-background-850 border-background-600 text-text-100 min-w-56" >
        <DialogHeader className="flex w-full items-center justify-between">
          <DialogTitle className="self-start">Nova transação</DialogTitle>
            <DialogClose onClick={() => setIsModalOpen(false)}/>
        </DialogHeader>

        <form className="space-y-4 px-3" onSubmit={handleSubmit(handleNewIncome)} noValidate>
          <div className="space-y-2">
            <Label htmlFor="name">Descrição</Label>
            <Input
              id="name"
              type="text"
              placeholder="Faculdade"
              className="border-zinc-500"
              {...register('name')}
            />
            <p className='text-red-400'>{errors.name && errors.name.message}</p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="amount">Valor</Label>
              <Input 
                id="amount"
                type="number" 
                placeholder="Valor"
                className="border-zinc-500"
                {...register('amount', { valueAsNumber: true })}
              />
              <p className='text-red-400'>{errors.amount && errors.amount.message}</p>
          </div>

          <Controller
            control={control}
            name="date"
            render={({field}) => {
              return(
                <div className="space-y-2">
                  <Label htmlFor="amount" className="block">Data</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-[240px] justify-start text-left font-normal hover:bg-zinc-100/20 hover:text-text-100",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon />
                            {field.value ? formatDateName(field.value, "PPP") : <span>Escolha uma data</span>}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0 bg-background-900 text-text-100 border-background-600" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    
                    <p className='text-red-400'>{errors.amount && errors.amount.message}</p>
                </div>
              )
            }}
          />
            

          <Controller
            control={control}
            name="categoryId"
            render={({ field }) => {
              return (
                <div className="space-y-2">
                  <Select value={field.value} onValueChange={field.onChange}>
                    <Label>Categoria</Label>
                    <SelectTrigger className="border-zinc-500">
                      <SelectValue placeholder="Selecione uma categoria" />
                    </SelectTrigger>
                    <SelectContent className="bg-background-850 text-text-100 border-background-600">
                      {categories && categories.map((category) => {
                        return (
                          <SelectItem key={category.id} 
                            className="focus:bg-background-600 focus:text-text-200" 
                            value={category.id}>
                              {category.name}
                          </SelectItem>
                        )
                      })}
                    </SelectContent>
                  </Select>
                  <p className='text-red-400'>{errors.categoryId && errors.categoryId.message}</p>
                </div>
              )
            }}
          />

          <Controller
            control={control}
            name="type"
            render={({ field }) => {
              return (
                <RadioGroup 
                  value={field.value} 
                  onValueChange={field.onChange} 
                  className="grid gap-4 grid-cols-2"
                >
                  <div>
                    <RadioGroupItem value="income" id="income" className="peer sr-only"/>
                    <Label htmlFor="income" className="flex items-center justify-center gap-2 p-3 rounded-md bg-background-800 hover:bg-background-800/60 border peer-data-[state=unchecked]:border-background-600 peer-data-[state=checked]:border-accent-green/70 cursor-pointer ">
                      <IncomeIcon />
                      <p>Entrada</p>
                    </Label>
                  </div>

                    <div>
                    <RadioGroupItem value="outcome" id="outcome" className="peer sr-only"/>
                    <Label htmlFor="outcome" className="flex items-center justify-center gap-2 p-3 rounded-md bg-background-800 hover:bg-background-800/60 border peer-data-[state=unchecked]:border-background-600 peer-data-[state=checked]:border-accent-red/70 cursor-pointer ">
                      <ExpenseIcon />
                      <p>Saída</p>
                    </Label>
                  </div>
                </RadioGroup>
              )
            }}
          />

          <Button type="submit" className="w-full" disabled={isSubmitting}>
              Cadastrar
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}