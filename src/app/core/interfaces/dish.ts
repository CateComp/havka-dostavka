export interface Dish {
    id: string;
    name: string;
    info: string;
    weight: string;
    image: string;
    type: string;
    price: number;
    rating?: number;
    orders?: number;
}
