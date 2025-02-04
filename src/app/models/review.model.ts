export interface Review {
    productId:string;
    productName: string;
    username: string;
    rating: number;
    comment: string;
    date: string;
  }
export interface Product {
    ProductId: string;
    ProductName: string;
    Quantity: number;
    IsActive: boolean;
  }  