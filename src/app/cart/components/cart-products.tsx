'use client'

import { CartContext } from '@/contexts/cart'
import { useContext } from 'react'
import { CartProduct } from './cart-product'
import { formatCurrency } from '@/helpers/price'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function CartProducts() {
  const { products, totalPrice, clearCart } = useContext(CartContext)

  const handleFinishOrder = () => clearCart()

  return (
    <div>
      {products.length > 0 ? (
        <>
          {products.map((product) => (
            <CartProduct key={product.id} product={product} />
          ))}

          <div className="px-5">
            <div className="flex items-center justify-between border-b border-zinc-300 py-5">
              <h3 className="text-lg font-semibold">Sub total</h3>
              <span className="text-lg font-semibold">
                {formatCurrency(totalPrice)}
              </span>
            </div>

            <div className="flex items-center justify-between border-b border-zinc-300 py-5">
              <h3 className="text-lg font-semibold">Total</h3>
              <span className="text-2xl font-bold">
                {formatCurrency(totalPrice)}
              </span>
            </div>
          </div>

          <div className="absolute bottom-10 flex w-full justify-center px-5">
            <Button
              className="w-full rounded-3xl bg-brown-900 hover:bg-brown-800"
              onClick={handleFinishOrder}
              asChild
            >
              <Link href="/">Finalize order</Link>
            </Button>
          </div>
        </>
      ) : (
        <h3 className="mt-10 text-center text-xl font-bold">
          No products in cart
        </h3>
      )}
    </div>
  )
}
