export interface ListExternalProductsResponse {
  products: ExternalProduct[];
}

export interface CountExternalProductsResponse {
  total: number;
}

export interface ExternalProduct {
  id: number;
  title: string;
  price: number;
  category: string;
  thumbnail: string;
  description: string;
  stock: number;
  rating: number;
  brand: string;
}
