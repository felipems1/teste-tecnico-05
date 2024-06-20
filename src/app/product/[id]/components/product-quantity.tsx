'use client'

import { Button } from '@/components/ui/button'
import { CartContext } from '@/contexts/cart'
import { ProductType } from '@/types/product'
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useContext, useState } from 'react'

interface ProductQuantityProps {
  product: ProductType
}

export function ProductQuantity({ product }: ProductQuantityProps) {
  const [quantity, setQuantity] = useState(1)

  const router = useRouter()

  const { addProductToCart } = useContext(CartContext)

  const handleAddToCartClick = () => {
    addProductToCart({ ...product, quantity })

    router.push('/')
  }

  const handleIncreaseQuantityClick = () => setQuantity((prev) => prev + 1)

  const handleDecreaseQuantityClick = () =>
    setQuantity((prev) => {
      if (prev === 1) return 1

      return prev - 1
    })

  return (
    <>
      <div className="mt-5 flex w-full items-center justify-center gap-5 bg-muted px-5 py-5">
        <Button
          size="icon"
          variant="ghost"
          className="rounded-full border border-solid border-brown-900 hover:bg-brown-800 hover:text-white"
          onClick={handleDecreaseQuantityClick}
        >
          <ChevronLeftIcon />
        </Button>
        <span className="w-4 text-center text-xl font-bold">{quantity}</span>
        <Button
          size="icon"
          className="rounded-full border border-solid border-brown-900 bg-brown-900 hover:bg-brown-800"
          onClick={handleIncreaseQuantityClick}
        >
          <ChevronRightIcon />
        </Button>
      </div>

      <div className="absolute bottom-10 flex w-full justify-center px-5">
        <Button
          className="w-full rounded-3xl bg-brown-900 hover:bg-brown-800"
          onClick={handleAddToCartClick}
        >
          Add to order
        </Button>
      </div>
    </>
  )
}