export interface Product {
  id: number;
  name: string;
  category: 'bracelet' | 'art';
  price: number;
  description: string;
  imageUrl: string;
  featured: boolean;
  available: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}