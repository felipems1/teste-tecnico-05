'use client'

import { ProductType } from '@/types/product'
import { ReactNode, createContext, useState } from 'react'

export interface CartProduct extends ProductType {
  quantity: number
}

interface ICartContext {
  products: CartProduct[]
  totalPrice: number
  addProductToCart: (product: CartProduct) => void
  decreaseProductQuantity: (productId: number) => void
  increaseProductQuantity: (productId: number) => void
  clearCart: () => void
}

export const CartContext = createContext<ICartContext>({} as ICartContext)

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<CartProduct[]>([])

  const totalPrice = products.reduce((acc, product) => {
    return acc + product.price * product.quantity
  }, 0)

  const clearCart = () => {
    setProducts([])
  }

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

  const decreaseProductQuantity: ICartContext['decreaseProductQuantity'] = (
    productId: number,
  ) => {
    return setProducts((prev) =>
      prev.map((cartProduct) => {
        if (cartProduct.id === productId) {
          if (cartProduct.quantity === 1) {
            return cartProduct
          }

          return {
            ...cartProduct,
            quantity: cartProduct.quantity - 1,
          }
        }

        return cartProduct
      }),
    )
  }

  const increaseProductQuantity: ICartContext['increaseProductQuantity'] = (
    productId: number,
  ) => {
    return setProducts((prev) =>
      prev.map((cartProduct) => {
        if (cartProduct.id === productId) {
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + 1,
          }
        }

        return cartProduct
      }),
    )
  }

  return (
    <CartContext.Provider
      value={{
        products,
        totalPrice,
        addProductToCart,
        decreaseProductQuantity,
        increaseProductQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
