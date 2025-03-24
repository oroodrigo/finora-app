import { Link, useRouteError } from 'react-router'

export function Error() {
  const error = useRouteError() as Error

  return (
    <div className="flex h-screen flex-col text-text-100 items-center justify-center gap-5 bg-background-900">
      <h1 className="text-4xl font-bold">Whooops, algo aconteceu...</h1>
      <p className="text-accent-foreground">
        Um erro aconteceu na aplicação, abaixo voce encontra mais detalhes:
      </p>

      <pre>{error?.message || JSON.stringify(error)}</pre>
      <p className="text-accent-foreground">
        Voltar para a{' '}
        <Link to="/" className="text-sky-600 dark:text-sky-400">
          Visão Geral
        </Link>
      </p>
    </div>
  )
}
