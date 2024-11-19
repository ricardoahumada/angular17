export interface Product {
    id?: number;
    name: string;
    code: string;
    image: string;
    date?: Date | string;
    price?: number;
    stars?: number;
}
