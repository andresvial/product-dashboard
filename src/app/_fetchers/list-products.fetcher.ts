import { listProductsUseCase } from '@/packages/domain-clean/products/use-cases/list.use-case';

interface ListProductsFetcherProps {
  page: number;
}

export const listProductsFetcher = async ({ page }: ListProductsFetcherProps) => {
  const products = await listProductsUseCase({ skip: page });

  return products;
};
