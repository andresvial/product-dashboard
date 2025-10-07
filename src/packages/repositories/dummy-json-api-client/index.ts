import { HttpClientRepository } from '../http-client';
import { productMapper } from './mappers/product.mapper';
import { ExternalProductsResponse } from './types';

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

  listProducts = async () => {
    const response = await this.sendRequest({
      path: 'products',
      method: 'GET',
    });

    const data = (await response.json()) as ExternalProductsResponse;

    const products = data.products.map(productMapper);

    return products;
  };
}
