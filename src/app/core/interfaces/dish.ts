export interface Dish {
    id?: number;
    name: string;
    info: string;
    weight: string;
    img: string;
    price: number;
    rating?: number;
    orders?: number;
}