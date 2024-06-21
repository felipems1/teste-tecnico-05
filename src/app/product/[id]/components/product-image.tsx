'use client'

import { Button } from '@/components/ui/button'
import { ProductType } from '@/types/product'
import { X } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

interface ProductImageProps {
  product: ProductType
}

export function ProductImage({ product }: ProductImageProps) {
  const router = useRouter()

  const handleBackClick = () => router.back()

  return (
    <div className="relative h-[360px] w-full">
      {product.images?.[0].image !== undefined && (
        <Image
          src={product.images[0].image}
          alt=""
          sizes="100%"
          fill
          className="object-cover"
        />
      )}

      <Button
        className="absolute right-6 top-6 flex rounded-full bg-white text-foreground hover:bg-brown-900 hover:text-white"
        size="icon"
        onClick={handleBackClick}
      >
        <X />
      </Button>
    </div>
  )
}
