import { Product } from '@/packages/domain-clean/products/product.entity';
import { Column } from '@/packages/ui';
import { priceFormatter } from '@/packages/strings';

export const columns: Column<Product>[] = [
  { key: 'title', header: 'Title' },
  { key: 'category', header: 'Category' },
  {
    key: 'price',
    header: 'Price',
    cell: (product) => priceFormatter(product.price),
  },
  { key: 'imageUrl', header: 'Image' },
];
