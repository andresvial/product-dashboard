import ProductTable from './_components/product-table';
import { listProductsFetcher } from './_fetchers/list-products.fetchers';

export default async function Home() {
  const products = await listProductsFetcher();
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Product Dashboard</h1>

        <ProductTable products={products} />
      </div>
    </div>
  );
}
