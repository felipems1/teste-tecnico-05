import Link from 'next/link'
import { MenuSheet } from './menu-sheet'
import { ShoppingCart } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Header() {
  return (
    <header className="flex h-20 w-full items-center justify-center bg-brown-900">
      <div className="flex w-screen items-center justify-between px-5 lg:hidden">
        <Link href="/cart">
          <ShoppingCart className="h-7 w-7 text-white" />
        </Link>

        <h1 className="text-lg font-semibold text-white">BURGERS RESTAURANT</h1>

        <MenuSheet />
      </div>

      <div className="hidden h-full items-center justify-center lg:flex">
        <Button className="h-full w-[200px] rounded-none border-b-4 border-white bg-transparent hover:bg-brown-800">
          Menu
        </Button>

        <Button className="h-full w-[200px] bg-transparent hover:bg-brown-800">
          Entrar
        </Button>

        <Button className="h-full w-[200px] bg-transparent hover:bg-brown-800">
          Contato
        </Button>
      </div>
    </header>
  )
}
