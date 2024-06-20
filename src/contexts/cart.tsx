'use client'

import { ProductType } from '@/types/product'
import { ReactNode, createContext, useState } from 'react'

interface CartProduct extends ProductType {
  quantity: number
}

interface ICartContext {
  products: CartProduct[]
  totalPrice: number
  addProductToCart: (product: CartProduct) => void
}

export const CartContext = createContext<ICartContext | undefined>(undefined)

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<CartProduct[]>([])

  const totalPrice = products.reduce((acc, product) => {
    return acc + product.price * product.quantity
  }, 0)

  const addProductToCart: ICartContext['addProductToCart'] = (product) => {
    const isProductAlreadyOnCart = products.some(
      (cartProduct) => cartProduct.id === product.id,
    )

    if (isProductAlreadyOnCart) {
      return setProducts((prev) =>
        prev.map((cartProduct) => {
          if (cartProduct.id === product.id) {
            return {
              ...cartProduct,
              quantity: cartProduct.quantity + product.quantity,
            }
          }

          return cartProduct
        }),
      )
    }

    setProducts((prev) => [...prev, product])
  }

  return (
    <CartContext.Provider value={{ products, totalPrice, addProductToCart }}>
      {children}
    </CartContext.Provider>
  )
}
