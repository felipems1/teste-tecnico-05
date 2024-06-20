import { MenuIcon } from 'lucide-react'

export function Header() {
  return (
    <header className="flex h-20 w-full items-center justify-center bg-brown-900">
      <h1 className="text-lg font-bold text-white">Menu</h1>
      <MenuIcon className="absolute right-5 h-7 w-7 text-white" />
    </header>
  )
}
