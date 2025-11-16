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
    fetchBooks();
  }, [fetchBooks]);

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
    <section className="max-w-5xl mx-auto mb-12">
      <h1 className="text-4xl font-extrabold text-white drop-shadow-md tracking-wide mb-2">
        Books Collection
      </h1>

      <p className="text-white/90 text-lg mb-6">
        Loaded <span className="font-semibold">{books.length}</span> books
      </p>

      <div className="w-32 h-1 bg-white/60 rounded mb-10"></div>

      <BooksList books={books} />
    </section>
  );
}
