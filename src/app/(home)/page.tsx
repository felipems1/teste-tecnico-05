import Image from 'next/image'
import { Header } from './components/header'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import { CategoryItem } from '@/app/(home)/components/category-item'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { ProductItem } from '@/app/(home)/components/product-item'
import { getCategories } from '@/services/get-categories'

export default async function Home() {
  const categories = await getCategories()

  return (
    <main className="min-h-screen w-screen">
      <Header />

      <div className="relative h-[160px] w-screen">
        <Image src="/banner-mobile-01.png" alt="" fill quality={100} />
      </div>

      <div className="mx-5 mt-5 flex items-center rounded-lg border border-border px-2">
        <Search className="text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search menu items"
          className="border-none focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-0"
        />
      </div>

      <div className="mt-10 flex w-full items-center justify-around px-5">
        <CategoryItem imageUrl="/image-3.png" name="Burgers" />
        <CategoryItem imageUrl="/image-2.png" name="Drinks" />
        <CategoryItem imageUrl="/image-1.png" name="Desserts" />
      </div>

      <Accordion type="single" collapsible className="mt-5 w-full px-5">
        {categories.sections.map((category) => (
          <AccordionItem key={category.id} value={category.name}>
            <AccordionTrigger className="text-xl">
              {category.name}
            </AccordionTrigger>

            <AccordionContent className="space-y-3">
              {category.items.map((product) => (
                <ProductItem product={product} key={product.id} />
              ))}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </main>
  )
}
