export interface SetCategory {
    id: number;
    name: string;
    updatedAt: string | Date
    createdAt:string;
    premium: boolean
}

export interface createSetCategory {
    name: string
    subcategoryId: number
}

export interface UpdateSetcategory {
    id:number;
    setcategory: string;
}