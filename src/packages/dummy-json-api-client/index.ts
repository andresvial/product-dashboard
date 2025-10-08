import { HttpClientRepository } from '../http-client';
import { productMapper } from './mappers/product.mapper';
import { CountExternalProductsResponse, ListExternalProductsResponse } from './types';

const BASE_URL = process.env.DUMMY_JSON_API_CLIENT_BASE_URL || '';

export class DummyJsonApiClient {
  private httpClientRepository;

  constructor() {
    const baseUrl = BASE_URL;

    this.httpClientRepository = new HttpClientRepository(baseUrl);
  }

  private sendRequest = async (args: { path: string; method: 'GET' | 'POST' }) => {
    const { path, method } = args;

    const response = await this.httpClientRepository.sendRequest({
      path,
      method,
    });

    return response;
  };

  listProducts = async (filters: { category?: string; limit?: number }) => {
    const { category, limit } = filters || {};

    let path = 'products';

    if (category) {
      path += `/category/${category}?`;
    } else {
      path += '?';
    }

    if (limit !== undefined) {
      path += `limit=${limit}`;
    }

    const response = await this.sendRequest({
      path,
      method: 'GET',
    });

    const data = (await response.json()) as ListExternalProductsResponse;

    const products = data.products.map(productMapper);

    return products;
  };

  countProducts = async () => {
    const path = 'products?limit=0';

    const response = await this.sendRequest({
      path,
      method: 'GET',
    });

    const data = (await response.json()) as CountExternalProductsResponse;

    return data.total;
  };
}
