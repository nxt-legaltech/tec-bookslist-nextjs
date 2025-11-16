import { Book } from "@/domain/book";
import { AuthorAssembler } from "./author-assembler";

/**
 * Book Assembler
 * @summary
 * This class is responsible for converting book resources
 * from external data sources into Book domain entities.
 */
export class BookAssembler {
  /**
   * Converts a book resource into a Book entity.
   * @param resource - The book resource object.
   * @returns A Book domain entity.
   */
  static toEntityFromResource(resource: any): Book {
    const authorsArray = Array.isArray(resource.authors)
      ? resource.authors
      : [];

    const authors = authorsArray.map((authorResource: any) =>
      AuthorAssembler.toEntityFromResource(authorResource)
    );

    return {
      id: resource.id,
      title: resource.title,
      authors,
    };
  }

  /**
   * Converts an array of book resources into an array of Book entities.
   * @param results - The array of book resource objects.
   * @returns An array of Book domain entities.
   */
  static toEntitiesFromResults(results: any[]): Book[] {
    if (!Array.isArray(results)) {
      return [];
    }

    return results.map((resource) => this.toEntityFromResource(resource));
  }
}
