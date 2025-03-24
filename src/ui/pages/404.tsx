import { Link } from 'react-router'

export function NotFound() {
  return (
    <div className="flex h-screen text-text-100 flex-col items-center justify-center gap-5 bg-background-900">
      <h1 className="text-4xl font-bold">Página não encontrada :(</h1>
      <p className="text-accent-foreground">
        Voltar para a{' '}
        <Link to="/" className="text-sky-600 dark:text-sky-400">
          Visão Geral
        </Link>
      </p>
    </div>
  )
}
