import Image from 'next/image';
import { Product } from '@/packages/domain-clean/products/product.entity';
import { Column, Button } from '@/packages/ui';
import { priceFormatter, capitalizeFirstLetter } from '@/packages/strings';

export const createColumns = (onDetailsClick: (product: Product) => void): Column<Product>[] => [
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
  {
    key: 'thumbnailUrl',
    header: 'Image',
    cell: (product) => (
      <Image
        src={product.thumbnailUrl}
        alt={product.title}
        width={48}
        height={48}
        className="w-12 h-12 object-cover rounded-md"
      />
    ),
  },
  {
    key: 'id',
    header: 'Actions',
    cell: (product) => (
      <Button variant="outline" size="sm" onClick={() => onDetailsClick(product)}>
        Details
      </Button>
    ),
  },
];
