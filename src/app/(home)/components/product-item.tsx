'use client'

import { Dialog, DialogContent } from '@/components/ui/dialog'
import { formatCurrency } from '@/helpers/price'
import { ProductType } from '@/types/product'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { ProductModal } from './product-modal'

interface ProductItemProps {
  product: ProductType
}

export function ProductItem({ product }: ProductItemProps) {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpenDialog = () => {
    setIsOpen(true)
  }

  const handleCloseDialog = () => {
    setIsOpen(false)
  }

  return (
    <div className="flex items-center justify-between gap-3">
      <div className="flex flex-col gap-1">
        <Link
          href={`/product/${product.id}`}
          className="text-base font-bold lg:hidden"
        >
          {product.name}
        </Link>

        <h3
          className="hidden lg:block lg:cursor-pointer lg:text-base lg:font-bold"
          onClick={handleOpenDialog}
        >
          {product.name}
        </h3>
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

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="p-1 pb-4">
          <ProductModal product={product} closeDialog={handleCloseDialog} />
        </DialogContent>
      </Dialog>
    </div>
  )
}
