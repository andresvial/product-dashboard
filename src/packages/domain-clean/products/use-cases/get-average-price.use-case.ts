import { DummyJsonApiClient } from '@/packages/repositories/dummy-json-api-client';

export const getAveragePriceUseCase = async () => {
  const dummyJsonApiClient = new DummyJsonApiClient();

  const totalProducts = await dummyJsonApiClient.countProducts();

  const products = await dummyJsonApiClient.listProducts({ limit: 0 });

  let totalPrice = 0;

  products.forEach((product) => {
    totalPrice += product.price;
  });

  const averagePrice = totalPrice / totalProducts;

  return averagePrice;
};
