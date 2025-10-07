// The idea of this is to have a unified entity across the application, mapping the one from the external API to this one
export interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  thumbnailUrl: string;
  description: string;
  stock: number;
  rating: number;
  brand: string;
}
