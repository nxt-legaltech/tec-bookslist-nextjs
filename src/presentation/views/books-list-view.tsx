"use client";

import { useBooks } from "@/application/useBooks";
import { useEffect } from "react";
import BooksList from "../components/books-list";

/**
 * Books List View
 * @summary Displays the books list with loading and error states.
 *
 * @description
 * This view component manages the state and lifecycle for displaying a list of books.
 * It handles loading, error, and empty states, and renders the BooksList component with the fetched data.
 *
 * @returns The rendered Books List View component.
 */
export function BooksListView() {
  const { books, loading, error, fetchBooks } = useBooks();

  useEffect(() => {
    console.log("BooksListView mounted, starting fetch...");
    fetchBooks();
  }, [fetchBooks]);

  console.log("Render state:", { loading, error, booksCount: books.length });

  if (loading) {
    return (
      <div>
        <p>Loading books...</p>
        <p style={{ fontSize: "0.8em", color: "#666" }}>
          Check browser console for details
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <p style={{ color: "red" }}>Error: {error}</p>
        <button onClick={fetchBooks}>Retry</button>
      </div>
    );
  }

  if (books.length === 0) {
    return <p>No books found</p>;
  }

  return (
    <section>
      <h1>Books List (first 10)</h1>
      <p>Loaded {books.length} books</p>
      <BooksList books={books} />
    </section>
  );
}
