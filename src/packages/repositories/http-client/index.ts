import { SendRequestArgs } from "./types";

export class HttpClientRepository {
  private baseUrl;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  private getUrl(path: string) {
    return `${this.baseUrl}/${path}`;
  }

  sendRequest = async (args: SendRequestArgs) => {
    const { path, method } = args;

    const url = this.getUrl(path);

    const response = await fetch(url, {
      method,
    });

    if (!response.ok) {
      let errorResponse;
      try {
        errorResponse = await response.json();
      } catch {
        errorResponse = response.statusText;
      }

      const errorMessage =
        typeof errorResponse === "object"
          ? JSON.stringify(errorResponse)
          : errorResponse;
      throw new Error(`Failed to send request to ${url}: ${errorMessage}`);
    }

    return response;
  };
}
