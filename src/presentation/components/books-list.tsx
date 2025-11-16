import { Book } from "@/domain/book";

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
    <ul>
      {books.map((book) => {
        const author = book.authors[0];
        return (
          <li key={book.id}>
            <strong>#{book.id}</strong> - {book.title}
            {author && <> — {author.name}</>}
          </li>
        );
      })}
    </ul>
  );
};

export default BooksList;
