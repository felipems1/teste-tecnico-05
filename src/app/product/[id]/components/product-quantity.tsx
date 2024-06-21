'use client'

import { Button } from '@/components/ui/button'
import { CartContext } from '@/contexts/cart'
import { formatCurrency } from '@/helpers/price'
import { ProductType } from '@/types/product'
import { Minus, Plus } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useContext, useState } from 'react'

interface ProductQuantityProps {
  product: ProductType
  closeDialog?: () => void
}

export function ProductQuantity({
  product,
  closeDialog,
}: ProductQuantityProps) {
  const [quantity, setQuantity] = useState(1)

  const router = useRouter()

  const { addProductToCart } = useContext(CartContext)

  const handleAddToCartClick = () => {
    addProductToCart({ ...product, quantity })

    if (closeDialog) {
      closeDialog()
    } else {
      router.push('/')
    }
  }

  const handleIncreaseQuantityClick = () => setQuantity((prev) => prev + 1)

  const handleDecreaseQuantityClick = () =>
    setQuantity((prev) => {
      if (prev === 1) return 1

      return prev - 1
    })

  const totalPriceProduct = product.price * quantity

  return (
    <>
      <div className="mt-5 flex w-full items-center justify-center gap-5 bg-muted px-5 py-5 lg:mb-5">
        <Button
          size="icon"
          variant="ghost"
          className="rounded-full border border-solid border-brown-900 hover:bg-brown-800 hover:text-white"
          onClick={handleDecreaseQuantityClick}
        >
          <Minus />
        </Button>
        <span className="w-4 text-center text-xl font-bold">{quantity}</span>
        <Button
          size="icon"
          className="rounded-full border border-solid border-brown-900 bg-brown-900 hover:bg-brown-800"
          onClick={handleIncreaseQuantityClick}
        >
          <Plus />
        </Button>
      </div>

      <div className="flex w-full justify-center px-5 pb-5 lg:bottom-1 lg:inline">
        <Button
          className="w-full max-w-[90%] space-x-4 rounded-3xl bg-brown-900 hover:bg-brown-800"
          onClick={handleAddToCartClick}
        >
          <span>Adicionar ao carrinho</span> <span>-</span>
          <span>{formatCurrency(totalPriceProduct)}</span>
        </Button>
      </div>
    </>
  )
}
