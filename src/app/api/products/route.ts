import { NextRequest, NextResponse } from 'next/server';
import { listProductsUseCase } from '@/packages/domain-clean/products/use-cases/list.use-case';
import { z } from 'zod';

// How to use:
// http://localhost:3000/api/products?category=groceries
// it filters the products by the category

const requestSchema = z.object({
  category: z.string().min(1).optional(),
});

export async function GET(request: NextRequest) {
  try {
    const searchParams = Object.fromEntries(request.nextUrl.searchParams.entries());
    const filters = requestSchema.parse(searchParams);

    const products = await listProductsUseCase(filters);

    return NextResponse.json(products, { status: 200 });
  } catch {
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
