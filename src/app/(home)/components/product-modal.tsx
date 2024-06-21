import { ProductImage } from '@/app/product/[id]/components/product-image'
import { ProductQuantity } from '@/app/product/[id]/components/product-quantity'
import { ProductType } from '@/types/product'

interface ProductModalProps {
  product: ProductType
  closeDialog: () => void
}

export function ProductModal({ product, closeDialog }: ProductModalProps) {
  return (
    <div className="w-full">
      <ProductImage product={product} />

      <div className="mt-2 space-y-1 px-5">
        <h3 className="text-lg font-bold">{product.name}</h3>
        <p>{product.description}</p>
      </div>

      <ProductQuantity product={product} closeDialog={closeDialog} />
    </div>
  )
}
