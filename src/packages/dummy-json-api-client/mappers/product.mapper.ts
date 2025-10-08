import { Product } from '@/packages/domain-clean/products/product.entity';
import { ExternalProduct } from '../types';

export const productMapper = (externalProduct: ExternalProduct): Product => {
  return {
    id: externalProduct.id,
    title: externalProduct.title,
    price: externalProduct.price,
    category: externalProduct.category,
    thumbnailUrl: externalProduct.thumbnail,
    description: externalProduct.description,
    stock: externalProduct.stock,
    rating: externalProduct.rating,
    brand: externalProduct.brand,
  };
};
