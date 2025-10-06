import { DummyJsonApiClient } from '@/packages/repositories/dummy-json-api-client';

export const listProductsUseCase = async () => {
  const dummyJsonApiClient = new DummyJsonApiClient();

  const products = await dummyJsonApiClient.listProducts();

  return products;
};
