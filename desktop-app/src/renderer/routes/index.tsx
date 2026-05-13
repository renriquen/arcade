import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Index
})

function Index() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold tracking-tight text-primary">Hello World!</h1>
        <p className="mt-3 text-lg text-muted-foreground">Welcome to Arcade</p>
      </div>
    </div>
  )
}
