import { findProductById } from '@/helpers/findProductById'
import { ProductType } from '@/types/product'

import { ProductImage } from './components/product-image'
import { notFound } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'
import { getCategories } from '@/services/get-categories'

interface ProductPageProps {
  params: {
    id: string
  }
}

export default async function Product({ params: { id } }: ProductPageProps) {
  const categories = await getCategories()

  const product: ProductType | null = findProductById(categories, Number(id))

  if (!product) {
    return notFound()
  }

  return (
    <div>
      <ProductImage product={product} />

      <div className="mt-5 space-y-2 px-5">
        <h3 className="text-2xl font-bold">{product.name}</h3>
        <p>{product.description}</p>
      </div>

      <div className="mt-5 flex w-full items-center justify-center gap-5 bg-muted px-5 py-5">
        <Button
          size="icon"
          variant="ghost"
          className="rounded-full border border-solid border-brown-900 hover:bg-brown-800 hover:text-white"
          /* onClick={decreaseQuantityClick} */
        >
          <ChevronLeftIcon />
        </Button>
        <span className="w-4 text-center text-xl font-bold">0</span>
        <Button
          size="icon"
          className="rounded-full border border-solid border-brown-900 bg-brown-900 hover:bg-brown-800"
          /* onClick={increaseQuantityClick} */
        >
          <ChevronRightIcon />
        </Button>
      </div>

      <div className="absolute bottom-10 flex w-full justify-center px-5">
        <Button className="w-full rounded-3xl bg-brown-900 hover:bg-brown-800">
          Add to order
        </Button>
      </div>
    </div>
  )
}
