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
  image: string;
}
