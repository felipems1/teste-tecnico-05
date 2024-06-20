import { findProductById } from '@/helpers/findProductById'
import { ProductType } from '@/types/product'

import { ProductImage } from './components/product-image'
import { notFound } from 'next/navigation'
import { getCategories } from '@/services/get-categories'
import { ProductQuantity } from './components/product-quantity'

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

      <ProductQuantity product={product} />
    </div>
  )
}
