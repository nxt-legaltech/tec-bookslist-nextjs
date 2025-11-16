/**
 * Base URL for the API, configurable via environment variable.
 */
const API_URL =
  process.env.NEXT_PUBLIC_BOOKS_API_BASE_URL ?? "https://gutendex.com";

/**
 * Generic response type for HTTP requests.
 */
export interface HttpResponse<T = any> {
  data: T;
  status: number;
  statusText: string;
}

/**
 * HTTP Client
 *
 * @summary Provides a simple HTTP client for making requests to external APIs.
 *
 * @description
 * This module exports a minimal HTTP client wrapper around the native Fetch API.
 * It provides GET, POST, PUT, and DELETE methods with consistent error handling
 * and response parsing. The client is configured with a base URL from environment
 * variables and includes automatic JSON parsing.
 */
class HttpClient {
  private baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  /**
   * Performs a GET request.
   * @param path - The API endpoint path.
   * @returns A promise resolving to the HTTP response.
   */
  async get<T = any>(path: string): Promise<HttpResponse<T>> {
    const url = `${this.baseURL}${path}`;

    try {
      const response = await fetch(url, {
        method: "GET",
        cache: "no-store",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      return {
        data,
        status: response.status,
        statusText: response.statusText,
      };
    } catch (error) {
      console.error("GET request failed:", error);
      throw error;
    }
  }

  /**
   *  For this implementation, only the GET method is needed. Uncomment other
   *  methods if required in the future.
   */

  /*   async post<T = any>(path: string, body: any): Promise<HttpResponse<T>> {
    const url = `${this.baseURL}${path}`;

    try {
      const response = await fetch(url, {
        method: "POST",
        cache: "no-store",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      return {
        data,
        status: response.status,
        statusText: response.statusText,
      };
    } catch (error) {
      console.error("POST request failed:", error);
      throw error;
    }
  }

  async put<T = any>(path: string, body: any): Promise<HttpResponse<T>> {
    const url = `${this.baseURL}${path}`;

    try {
      const response = await fetch(url, {
        method: "PUT",
        cache: "no-store",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      return {
        data,
        status: response.status,
        statusText: response.statusText,
      };
    } catch (error) {
      console.error("PUT request failed:", error);
      throw error;
    }
  }

  async delete<T = any>(path: string): Promise<HttpResponse<T>> {
    const url = `${this.baseURL}${path}`;

    try {
      const response = await fetch(url, {
        method: "DELETE",
        cache: "no-store",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      return {
        data,
        status: response.status,
        statusText: response.statusText,
      };
    } catch (error) {
      console.error("DELETE request failed:", error);
      throw error;
    }
  } */
}

/**
 * Configured HTTP client instance for API requests.
 */
export const httpClient = new HttpClient(API_URL);
