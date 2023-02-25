import { Subcategory } from '../model'

const findSubcategory = (sub_category: Subcategory[], subcategoryId: number) => {
    return sub_category?.find(value => value.id === Number(subcategoryId))
  }

export default findSubcategory
