import { Product } from '@/packages/domain-clean/products/product.entity';
import { ExternalProduct } from '../types';

export const productMapper = (externalProduct: ExternalProduct): Product => {
  return {
    id: externalProduct.id,
    title: externalProduct.title,
    price: externalProduct.price,
    category: externalProduct.category,
    imageUrl: externalProduct.image,
  };
};
