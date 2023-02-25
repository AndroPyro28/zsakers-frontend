import { SetCategory } from "./SetCategory";

export interface Subcategory {
    id: number;
    name: string;
    updatedAt: string | Date
    premium: null | boolean;
    set_category: SetCategory[]
    createdAt:string
}

export interface CreateSubcategory {
    name: string;
    categoryId: number;
    premium: null | boolean;
}

export interface UpdateSubcategory {
    id:number;
    subcategory: string;
    premium: null | boolean;
}