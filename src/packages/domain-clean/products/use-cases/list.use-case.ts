import { DummyJsonApiClient } from '@/packages/dummy-json-api-client';

interface ListProductsUseCaseFilters {
  category?: string;
  limit?: number;
  skip?: number;
}

export const listProductsUseCase = async (filters: ListProductsUseCaseFilters) => {
  const dummyJsonApiClient = new DummyJsonApiClient();

  const products = await dummyJsonApiClient.listProducts(filters);

  return products;
};
