import { Suspense } from 'react';
import { Dashboard } from './_components/dashboard';
import ProductTable from './_components/product-table';
import { listProductsFetcher } from './_fetchers/list-products.fetcher';

export default async function Home() {
  // TODO: Obtain parameters from the URL and use it to do a paginated request
  const products = await listProductsFetcher();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Product Dashboard</h1>

        <div className="flex flex-col gap-4">
          <Dashboard />
          <Suspense fallback={<div>Loading products...</div>}>
            <ProductTable products={products} />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
