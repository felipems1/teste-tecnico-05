import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { CategoryItem } from './category-item'
import { ProductItem } from './product-item'
import { CategoriesType } from '@/types/categories'

interface ProductsInfoProps {
  categories: CategoriesType
}

export function ProductsInfo({ categories }: ProductsInfoProps) {
  return (
    <>
      <div className="mt-10 flex w-full items-center justify-around px-5">
        <CategoryItem imageUrl="/image-3.png" name="Burgers" />
        <CategoryItem imageUrl="/image-2.png" name="Drinks" />
        <CategoryItem imageUrl="/image-1.png" name="Desserts" />
      </div>

      <Accordion type="single" collapsible className="mt-5 w-full px-5 pb-5">
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
    </>
  )
}
