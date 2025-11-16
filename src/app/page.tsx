"use client";

import { BooksListView } from "@/presentation/views/books-list-view";

/**
 * Home Page Component
 * 
 * @summary The main entry point for the application, rendering the Books List View.
 * 
 * @description
 * This component serves as the homepage of the application. It sets up the main layout
 * and includes the BooksListView component, which handles displaying a list of books
 * fetched from the Gutendex API.
 * 
 * @returns The rendered Home Page component.
 */
export default function Home() {
  return (
    <main
      className="min-h-screen py-8"
      style={{
        background:
          "linear-gradient(90deg, rgba(80,137,186,1) 0%, rgba(112,158,133,1) 84%, rgba(237,221,83,1) 100%)",
      }}
    >
      <BooksListView />
    </main>
  );
}
