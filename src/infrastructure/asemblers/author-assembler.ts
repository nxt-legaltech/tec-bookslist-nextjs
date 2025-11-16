import { Author } from "@/domain/author";

/**
 * Author Assembler
 * @summary
 * This class is responsible for converting author resources
 * from external data sources into Author domain entities.
 */
export class AuthorAssembler {
  /**
   * Converts an author resource into an Author entity.
   * @param resource - The author resource object.
   * @returns An Author domain entity.
   */
  static toEntityFromResource(resource: any): Author {
    return {
      name: resource.name,
      birth_year:
        typeof resource.birth_year === "number" ? resource.birth_year : null,
      death_year:
        typeof resource.death_year === "number" ? resource.death_year : null,
    };
  }
}
