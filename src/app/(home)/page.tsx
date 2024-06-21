import Image from 'next/image'
import { Header } from './components/header'
import { CartProducts } from '../cart/components/cart-products'
import { ProductsInfo } from './components/products-info'
import { Search } from './components/search'

export default function Home() {
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

      <div className="mx-5 mt-5 flex items-center rounded-lg border border-border bg-white px-2 lg:mx-auto lg:max-w-[70%]">
        <Search />
      </div>

      <div className="lg:mx-auto lg:flex lg:max-w-[70%] lg:items-start lg:gap-10 lg:py-10">
        <div className="bg-white lg:w-2/4 lg:rounded-lg lg:shadow-lg">
          <ProductsInfo />
        </div>

        <div className="hidden bg-white lg:flex lg:w-2/4 lg:rounded-lg lg:shadow-lg">
          <CartProducts />
        </div>
      </div>
    </main>
  )
}
