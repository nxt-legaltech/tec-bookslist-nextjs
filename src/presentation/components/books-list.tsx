import { Book } from "@/domain/book";
import Image from "next/image";

/**
 * Props for Books List Component
 */
interface BooksListProps {
  books: Book[];
}

/**
 * Books List Component
 * @summary Displays a list of books.
 *
 * @description
 * This component receives an array of Book entities as a prop and renders
 * each book's id, title and the name of its first author in a list.
 *
 * @param {BooksListProps} props - The props for the component.
 * @returns The rendered Books List component.
 */
const BooksList = ({ books }: BooksListProps) => {
  return (
    <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
      {books.map((book) => {
        const firstAuthor = book.authors[0];

        return (
          <div key={book.id} className="relative w-full max-w-sm mx-auto">
            <Image
              src="/images/book-open.webp"
              alt="Open book background"
              width={400}
              height={250}
              className="w-full h-auto pointer-events-none select-none drop-shadow-md"
            />

            <div className="absolute inset-0 flex flex-col justify-between px-10 py-10 -mt-4">
              <div className="flex justify-end mr-8">
                <span className="text-[10px] font-mono text-gray-500 bg-white/70 px-2 py-1 rounded">
                  ID #{book.id}
                </span>
              </div>

              <div className="max-w-[80%] m-auto text-center">
                <h2 className="text-lg font-semibold leading-snug line-clamp-3">
                  {book.title}
                </h2>
              </div>

              <div className="flex justify-end mb-8 mr-2">
                <p className="text-xs italic text-gray-700 bg-white/70 px-3 py-1 rounded">
                  — {firstAuthor?.name || "Unknown Author"}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BooksList;
