import { DummyJsonApiClient } from '@/packages/repositories/dummy-json-api-client';

interface ListProductsUseCaseFilters {
  category?: string;
}

export const listProductsUseCase = async (filters: ListProductsUseCaseFilters) => {
  const dummyJsonApiClient = new DummyJsonApiClient();

  const products = await dummyJsonApiClient.listProducts(filters);

  return products;
};
