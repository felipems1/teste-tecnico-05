'use client'

import { CartContext } from '@/contexts/cart'
import { ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import { useContext } from 'react'

export function CartQuantity() {
  const { products } = useContext(CartContext)

  return (
    <Link href="/cart">
      <ShoppingCart className="h-7 w-7 text-white" />
      {products.length > 0 && (
        <div className="absolute left-10 top-3 flex h-6 w-6 items-center justify-center rounded-full bg-zinc-50 font-bold">
          {products.length}
        </div>
      )}
    </Link>
  )
}
