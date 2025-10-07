import { getAveragePriceUseCase } from '@/packages/domain-clean/products/use-cases/get-average-price.use-case';

export const getAveragePriceFetcher = async () => {
  const averagePrice = await getAveragePriceUseCase();

  return averagePrice;
};
