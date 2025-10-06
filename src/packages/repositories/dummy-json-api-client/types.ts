export interface ExternalProductsResponse {
  products: ExternalProduct[];
}

export interface ExternalProduct {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
}
