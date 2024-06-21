import Link from 'next/link'
import { MenuSheet } from './menu-sheet'
import { ShoppingCart } from 'lucide-react'

export function Header() {
  return (
    <header className="flex h-20 w-full items-center justify-center bg-brown-900">
      <div className="flex w-screen items-center justify-between px-5">
        <Link href="/cart">
          <ShoppingCart className="h-7 w-7 text-white" />
        </Link>

        <h1 className="text-lg font-semibold text-white">BURGERS RESTAURANT</h1>

        <MenuSheet />
      </div>
    </header>
  )
}
