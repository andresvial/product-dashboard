import { PopularCategoryCard } from './popular-category-card';

// NOTE: I duplicated the card as placeholders and to make the page looks stylish.

export const Dashboard = () => {
  const popularCategory = 'electronics'; ////////////////////////////
  return (
    <div className="flex flex-row gap-4 justify-between">
      <PopularCategoryCard category={popularCategory} />
      <PopularCategoryCard category={popularCategory} />
      <PopularCategoryCard category={popularCategory} />
    </div>
  );
};
