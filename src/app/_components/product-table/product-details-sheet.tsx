'use client';

import { Product } from '@/packages/domain-clean/products/product.entity';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from '@/packages/ui';
import { priceFormatter, capitalizeFirstLetter } from '@/packages/strings';
import Image from 'next/image';

interface ProductDetailsSheetProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProductDetailsSheet({
  product,
  isOpen,
  onClose,
}: ProductDetailsSheetProps) {
  if (!product) {
    return null;
  }

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="right" className="!max-w-1/3">
        <SheetHeader>
          <SheetTitle>Product Details</SheetTitle>
          <SheetDescription>Detailed information about {product.title}</SheetDescription>
        </SheetHeader>

        <div className="space-y-6 p-4 overflow-y-auto">
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg text-gray-900 mb-2">{product.title}</h3>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b">
                <span className="font-medium text-gray-700">ID:</span>
                <span className="text-gray-900">{product.id}</span>
              </div>

              <div className="flex justify-between items-center py-2 border-b">
                <span className="font-medium text-gray-700">Category:</span>
                <span className="text-gray-900">{capitalizeFirstLetter(product.category)}</span>
              </div>

              <div className="flex justify-between items-center py-2 border-b">
                <span className="font-medium text-gray-700">Price:</span>
                <span className="text-gray-900 font-semibold">{priceFormatter(product.price)}</span>
              </div>

              <div className="flex justify-between items-center py-2 border-b">
                <span className="font-medium text-gray-700">Stock:</span>
                <span className="text-gray-900">{product.stock}</span>
              </div>

              <div className="flex justify-between items-center py-2 border-b">
                <span className="font-medium text-gray-700">Rating:</span>
                <span className="text-gray-900">{product.rating}</span>
              </div>

              <div className="flex justify-between items-center py-2 border-b">
                <span className="font-medium text-gray-700">Brand:</span>
                <span className="text-gray-900">{product.brand}</span>
              </div>

              <div className="space-y-2">
                <span className="font-medium text-gray-700">Description:</span>
                <p className="text-sm text-gray-600 leading-relaxed mt-3">{product.description}</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative w-48 h-48 rounded-lg overflow-hidden border">
              <Image src={product.thumbnailUrl} alt={product.title} fill className="object-cover" />
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
