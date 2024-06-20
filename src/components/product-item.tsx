import { formatCurrency } from '@/helpers/price'
import { ProductType } from '@/types/product'
import Image from 'next/image'
import Link from 'next/link'

interface ProductItemProps {
  product: ProductType
}

export function ProductItem({ product }: ProductItemProps) {
  return (
    <div className="flex items-center justify-between gap-3">
      <div className="flex flex-col gap-1">
        <Link href={`/product/${product.id}`} className="text-base font-bold">
          {product.name}
        </Link>
        <p>{product.description}</p>
        <span className="text-base font-semibold">
          {formatCurrency(product.price)}
        </span>
      </div>

      {product.images?.[0] !== undefined && (
        <Image
          src={product.images[0].image}
          alt=""
          width={120}
          height={80}
          className="rounded-md object-contain"
        />
      )}
    </div>
  )
}
