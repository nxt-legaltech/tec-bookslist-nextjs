import { Book } from "@/domain/book";
import { BookAssembler } from "./asemblers/book-assembler";

/**
 * Interface representing the structure of the Gutendex API response.
 */
interface GutendexResponse {
  count: number;
  results: any[];
}

/**
 * Book Api Service
 *
 * @summary Service for fetching books from the Gutendex API.
 *
 * @description
 * This service provides methods to interact with the Gutendex API to retrieve book data.
 * It handles network requests, error handling, and data transformation into domain entities.
 */
export class BookApiService {
  /**
   * Base URL for the Gutendex API.
   */
  private static readonly BASE_URL =
    process.env.NEXT_PUBLIC_BOOKS_API_BASE_URL ?? "https://gutendex.com";

  /**
   * Path for the books endpoint.
   */
  private static readonly BOOKS_PATH = "/books";

  /**
   * Fetches a paginated list of books from the Gutendex API.
   * @param page - The page number to fetch (default is 1).
   * @returns An object containing an array of Book entities and the total count of books.
   * @throws Will throw an error if the network request fails or if the API returns an error status.
   */
  static async getBooks(
    page: number = 1
  ): Promise<{ books: Book[]; total: number }> {
    const url = `${this.BASE_URL}${this.BOOKS_PATH}/?page=${page}`;
    
    console.log("Fetching books from:", url);

    let response: Response;

    try {
      response = await fetch(url, {
        cache: 'no-store',
      });
    } catch (err) {
      console.error("Network error:", err);
      throw new Error("Network error while fetching books.");
    }

    if (!response.ok) {
      console.error("API error:", response.status, response.statusText);
      throw new Error(
        `API error while fetching books (status: ${response.status}).`
      );
    }

    let data: GutendexResponse;

    try {
      data = (await response.json()) as GutendexResponse;
      console.log("API Response:", { count: data.count, resultsCount: data.results?.length });
    } catch (err) {
      console.error("JSON parsing error:", err);
      throw new Error("Error parsing JSON response.");
    }

    const books = BookAssembler.toEntitiesFromResults(data.results || []);

    return {
      books,
      total: typeof data.count === "number" ? data.count : books.length,
    };
  }
}
