'use client'

import { Button } from '@/components/ui/button'
import { CartContext, CartProduct as CartProductType } from '@/contexts/cart'
import { formatCurrency } from '@/helpers/price'
import { Minus, Plus } from 'lucide-react'
import { useContext } from 'react'

interface CartProductProps {
  product: CartProductType
}

export function CartProduct({ product }: CartProductProps) {
  const { decreaseProductQuantity, increaseProductQuantity } =
    useContext(CartContext)

  const handleDecreaseQuantityClick = () => {
    decreaseProductQuantity(product.id)
  }

  const handleIncreaseQuantityClick = () => {
    increaseProductQuantity(product.id)
  }

  const totalPriceProduct = product.price * product.quantity

  return (
    <div className="flex items-center justify-between border-b border-zinc-300 px-5 py-5">
      <div className="space-y-3">
        <h3 className="text-lg font-semibold">{product.name}</h3>

        <div className="flex items-center gap-4">
          <Button
            size="icon"
            variant="ghost"
            className="flex h-6 w-6 items-center justify-center rounded-full border border-solid border-brown-900 bg-brown-900 hover:bg-brown-800"
            onClick={handleDecreaseQuantityClick}
          >
            <Minus size={16} color="white" />
          </Button>
          <span className="w-4 text-center text-lg font-bold">
            {product.quantity}
          </span>
          <Button
            size="icon"
            className="flex h-6 w-6 items-center justify-center rounded-full border border-solid border-brown-900 bg-brown-900 hover:bg-brown-800"
            onClick={handleIncreaseQuantityClick}
          >
            <Plus size={16} color="white" />
          </Button>
        </div>
      </div>

      <span className="text-lg font-semibold">
        {formatCurrency(totalPriceProduct)}
      </span>
    </div>
  )
}
