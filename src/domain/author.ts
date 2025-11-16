/**
 * Author domain model
 *
 * @summary Represents an author with their details.
 *
 * @property {string} name - The name of the author.
 * @property {number | null} birth_year - The birth year of the author, or null if unknown.
 * @property {number | null} death_year - The death year of the author, or null if still alive or unknown.
 */
export interface Author {
  name: string;
  birth_year: number | null;
  death_year: number | null;
}
