'use client';

import { useState } from 'react';
import { useFilters } from '@/packages/hooks';
import { DataTable } from '@/packages/ui';
import { Product } from '@/packages/domain-clean/products/product.entity';
import { createColumns } from './columns';
import ProductDetailsSheet from './product-details-sheet';

const PAGE_SIZE = 10;

interface ProductTableProps {
  products: Product[];
}

export default function ProductTable({ products }: ProductTableProps) {
  const { setFilters, getFilter } = useFilters();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  // Get current page from URL parameters, default to 1
  const currentPage = parseInt(getFilter('page') || '1', 10);

  const handlePageChange = (page: number) => {
    setFilters({ page: page.toString() });
  };

  const handleDetailsClick = (product: Product) => {
    setSelectedProduct(product);
    setIsSheetOpen(true);
  };

  const handleCloseSheet = () => {
    setIsSheetOpen(false);
    setSelectedProduct(null);
  };

  const columns = createColumns(handleDetailsClick);

  return (
    <>
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

      <ProductDetailsSheet
        product={selectedProduct}
        isOpen={isSheetOpen}
        onClose={handleCloseSheet}
      />
    </>
  );
}
