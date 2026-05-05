export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  image: string;
  category: string;
  sale: boolean;
  saleLabel?: string;
  badge?: string;
}

export type Category = "All" | "Electronics" | "Clothing" | "Accessories" | "Home" | "Sports";
