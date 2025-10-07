import { Product } from '@/packages/domain-clean/products/product.entity';
import { Column } from '@/packages/ui';
import { priceFormatter, capitalizeFirstLetter } from '@/packages/strings';

export const columns: Column<Product>[] = [
  { key: 'title', header: 'Title' },
  {
    key: 'category',
    header: 'Category',
    cell: (product) => capitalizeFirstLetter(product.category),
  },
  {
    key: 'price',
    header: 'Price',
    cell: (product) => priceFormatter(product.price),
  },
  { key: 'imageUrl', header: 'Image' },
];
