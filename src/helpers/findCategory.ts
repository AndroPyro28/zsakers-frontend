import { Category } from '../model'

const findCategory = (categories: Category[], categoryId: number) => {
    return categories?.find(value => value.id === Number(categoryId))
  }

export default findCategory