import { Category } from "./Category";
import { SetCategory } from "./SetCategory";
import { Subcategory } from "./Subcategory";

export interface CreateProduct {
    productName: string,
    productPrice: string,
    productStock: string | number,
    image: null | any,
    quantity: number | string;
    details: string
    categoryId: string,
    subcategoryId: string;
    setcategoryId:string;
    // productId: number | string | null
}

export interface Product {
    id: number;
    productName: string;
    price: number;
    createdAt: string;
    updatedAt: string;
    quantity: number | string;
    details: string
    image_url: string;
    image_id: string;
    stock: number;
    categoryId: number;
    subcategoryId: number;
    setcategoryId:number;
    // productId: number | string | null
    category: Category;
    sub_category: Subcategory;
    set_category: SetCategory;
    products: Product[];
    archive: boolean;
    cart_product: any[]
}

export interface UpdateProduct {
    id: number,
    productName: string,
    price: number,
    details: string,
    stock: number,
    quantity: number | string;
    image_url: string,
    image_id:string,
    categoryId: number,
    subcategoryId: number,
    setcategoryId:number;
    // productId: number | string | null
}

export interface Search {
    searchName:string;
    categoryId: number;
    subcategoryId:number;
    setcategoryId:number;
}

export interface getBySubcategory {
    subcategoryId: number;
}