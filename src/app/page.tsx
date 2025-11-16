"use client";

import { BooksListView } from "@/presentation/views/books-list-view";

export default function Home() {
  return (
    <main style={{ padding: "2rem" }}>
      <BooksListView />
    </main>
  );
}
