import { AveragePriceCard } from './average-price-card';
import { getAveragePriceFetcher } from '@/app/_fetchers/get-average-price.fetcher';

// NOTE: I duplicated the card as placeholders and to make the page looks stylish.

export const Dashboard = async () => {
  ////////////pasar a ftecher!!!!!!!!
  const averagePrice = await getAveragePriceFetcher();

  return (
    <div className="flex flex-row gap-4 justify-between">
      <AveragePriceCard averagePrice={averagePrice} />
      <AveragePriceCard averagePrice={averagePrice} />
      <AveragePriceCard averagePrice={averagePrice} />
    </div>
  );
};
