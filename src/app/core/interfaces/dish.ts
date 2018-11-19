export interface Dish {
    complex?: string;
    id?: string;
    info: string;
    weight: string;
    img: string;
    name: string;
    orders?: number;
    price: number;
    rating?: number;
    todaymenu: boolean;
    type: string;
}