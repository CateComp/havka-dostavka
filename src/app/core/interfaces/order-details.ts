export interface OrderProduct {
    product_id: string,
    quantity: number
};

export interface OrderDetails {
    user_id: string,
    products: OrderProduct[]
}
