export interface OrderProduct {
    productId: string;
    quantity: number;
};

export interface OrderDetails {
    userId: string;
    products: OrderProduct[];
}
