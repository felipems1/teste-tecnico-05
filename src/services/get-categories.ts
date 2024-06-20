import { CategoriesType } from '@/types/categories'

export async function getCategories(): Promise<CategoriesType> {
  const response = await fetch('https://cdn-dev.preoday.com/challenge/menu')
  if (!response.ok) {
    throw new Error('Failed to get categories')
  }
  const categories: CategoriesType = await response.json()
  return categories
}
