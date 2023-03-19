import { bundleChildProduct, bundleParentProduct } from "./Bundle";
import { Category } from "./Category";
import { Subcategory } from "./Subcategory";

type productType = "SINGLE" | "BUNDLE" | "ADDONS"

export interface CreateProduct {
    productName: string,
    productPrice: string,
    productStock: string | number,
    image: null | any,
    quantity: number | string;
    details: string
    categoryId: string,
    subcategoryId?: string;
    productType: string
    productIds: undefined | number[]
    // setcategoryId:string;
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
    // setcategoryId:number;
    productId: number | string | null
    category: Category;
    sub_category: Subcategory;
    products: Product[];
    archive: boolean;
    productType: productType
    cart_product: any[],
    bundleParentProduct: bundleParentProduct[]
    bundleChildProduct: bundleChildProduct[]
}

export interface UpdateProduct {
    id: number,
    productName: string,
    price: number,
    details: string,
    stock: number ,
    quantity: number | string | undefined;
    image_url: string,
    image_id:string,
    categoryId: number,
    subcategoryId: number,
    bundleChildrenProductIds?: number[];
    productType: productType

    // setcategoryId:number;
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