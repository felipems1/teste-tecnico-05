import { ProductType } from './product'

export interface CategoriesType {
  sections: [
    {
      id: number
      name: string
      images: [
        {
          image: string
        },
      ]
      items: ProductType[]
    },
  ]
}
