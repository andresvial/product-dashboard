import { listProductsUseCase } from '@/packages/domain-clean/products/use-cases/list.use-case';

export const listProductsFetcher = async () => {
  const products = await listProductsUseCase({ limit: 0 });

  return products;
};
