import { Book } from "@/domain/book";
import { BookAssembler } from "./asemblers/book-assembler";
import { httpClient } from "../shared/infrastructure/http-client";

/**
 * Book API Service
 *
 * @summary Provides methods to interact with the Gutendex Books API.
 *
 * @description
 * This service handles all book-related API operations including fetching
 * paginated lists of books. It uses the HTTP client for network requests
 * and the BookAssembler for data transformation into domain entities.
 */
export class BookApiService {
  private static readonly BASE_PATH = "/books";

  /**
   * Get all books (paginated)
   * @param page - The page number to fetch (default is 1).
   * @returns An object containing an array of Book entities and the total count.
   */
  static async getBooks(
    page: number = 1
  ): Promise<{ books: Book[]; total: number }> {
    const response = await httpClient.get(`${this.BASE_PATH}/?page=${page}`);
    const books = BookAssembler.toEntitiesFromResponse(response);
    
    return {
      books,
      total: response.data?.count || books.length,
    };
  }
}
