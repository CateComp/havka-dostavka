export interface OrderProduct {
    productId: string;
    quantity: number;
};

export interface OrderDetails {
    userId: string;
    address: string;
    phone: string;
    products: OrderProduct[];
}
