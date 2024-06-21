import { MenuSheet } from './menu-sheet'
import { Button } from '@/components/ui/button'
import { CartQuantity } from './cart-quantity'

export function Header() {
  return (
    <header className="flex h-20 w-full items-center justify-center bg-brown-900">
      <div className="flex w-screen items-center justify-between px-5 lg:hidden">
        <CartQuantity />

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
