"use client";

import { Book } from "@/domain/book";
import { BookApiService } from "@/infrastructure/book-api-service";
import { useCallback, useState } from "react";

/**
 * Use Books Hook
 * @summary Manages the state and operations related to books.
 *
 * @description
 * This hook provides state management for loading status, error handling,
 * and the list of books. It can be extended to include functions for fetching,
 * adding, updating, or deleting books as needed.
 *
 * @method fetchBooks - Fetches the list of books from the API.
 * @method clearError - Clears any existing error messages.
 * @method clearBooks - Clears the current list of books.
 *
 * @returns An object containing loading status, error message, and the list of books.
 */
export const useBooks = () => {
  /**
   * State: Loading Status and Error Message to manage the loading state and any errors that occur during data fetching.
   */
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  /**
   * State: Books List to store the fetched books.
   */
  const [books, setBooks] = useState<Book[]>([]);

  /**
   * Fetch Books from the API and update the books state.
   */
  const fetchBooks = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const { books: fetched } = await BookApiService.getBooks(1);
      setBooks(fetched);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Failed to fetch books.";
      console.error("Error fetching books:", err);
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  }, []);

  /**
   * Clear Error to reset the error state.
   */
  const clearError = useCallback(() => setError(null), []);

  /**
   * Clear Books to reset the books list.
   */
  const clearBooks = useCallback(() => setBooks([]), []);

  return {
    books,
    loading,
    error,
    fetchBooks,
    clearError,
    clearBooks,
  };
};
