import Image from 'next/image'
import { Header } from './components/header'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import { getCategories } from '@/services/get-categories'
import { CartProducts } from '../cart/components/cart-products'
import { ProductsInfo } from './components/products-info'

export default async function Home() {
  const categories = await getCategories()

  return (
    <main className="min-h-screen w-full bg-muted">
      <Header />

      <div className="relative h-[160px] w-full">
        <Image
          src="/banner-desktop-01.png"
          alt=""
          className="object-cover"
          fill
          quality={100}
        />
      </div>

      <div className="mx-5 mt-5 flex items-center rounded-lg border border-border bg-white px-2 lg:mx-auto lg:max-w-[80%]">
        <Search className="text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search menu items"
          className="border-none focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-0"
        />
      </div>

      <div className="lg:mx-auto lg:flex lg:max-w-[70%] lg:gap-10 lg:py-10">
        <div className="bg-white lg:w-2/4">
          <ProductsInfo categories={categories} />
        </div>

        <div className="hidden bg-white lg:flex lg:w-2/4">
          <CartProducts />
        </div>
      </div>
    </main>
  )
}
