export interface Dish {
    id: string;
    name: string;
    info: string;
    weight: number;
    img: string;
    type: string;
    price: number;
    rating?: number;
    orders?: number;
}
