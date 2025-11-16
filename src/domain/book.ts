import { Author } from "./author";

/**
 * Book domain model
 *
 * @summary Represents a book with its details.
 *
 * @property {number} id - The unique identifier for the book.
 * @property {string} title - The title of the book.
 * @property {Author[]} authors - An array of authors who wrote the book.
 */
export interface Book {
  id: number;
  title: string;
  authors: Author[];
}
