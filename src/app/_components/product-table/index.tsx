'use client';

import { useFilters } from '@/packages/hooks';
import { DataTable } from '@/packages/ui';
import { Product } from '@/packages/domain-clean/products/product.entity';
import { columns } from './columns';

const PAGE_SIZE = 10;

interface ProductTableProps {
  products: Product[];
}

export default function ProductTable({ products }: ProductTableProps) {
  const { setFilters, getFilter } = useFilters();

  // Get current page from URL parameters, default to 1
  const currentPage = parseInt(getFilter('page') || '1', 10);

  const handlePageChange = (page: number) => {
    setFilters({ page: page.toString() });
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border">
      <div className="p-6">
        <DataTable
          data={products}
          columns={columns}
          pageSize={PAGE_SIZE}
          emptyMessage="No products found"
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}
