import { CategoriesType } from '@/types/categories'

export function findProductById(categories: CategoriesType, productId: number) {
  for (const section of categories.sections) {
    for (const item of section.items) {
      if (item.id === productId) {
        return item
      }
    }
  }
  return null
}
