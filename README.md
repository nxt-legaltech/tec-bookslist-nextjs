# TEC BooksList — Next.js

A simple, layered Next.js application that consumes the Gutendex public books API and displays a list of books with basic metadata (id, title and author). The project demonstrates a small clean-architecture / layered approach with Domain, Infrastructure, Application and Presentation layers, and uses Tailwind CSS utility classes in the presentation.

## Summary

TEC BooksList is a minimal example application built with Next.js and TypeScript that fetches books from the Gutendex API and displays them in a responsive grid. The codebase is organized using a layered architecture and includes assembler utilities to map external API payloads into domain entities.

## Application Preview
For a complete overview of how the application works, please review:

**[APPLICATION_PREVIEW.md](./docs/APP_PREVIEW.md)**

## Quick Start

```bash
# Install dependencies
npm install

# Run in development
npm run dev

# Open in the browser
open http://localhost:3000
```

## Features

- Fetch paginated books from Gutendex public API
- Layered architecture (Domain / Infrastructure / Application / Presentation)
- Assembler pattern to convert API resources to domain entities
- Client-side fetching via a custom `useBooks` hook
- Responsive UI with Tailwind CSS utility classes
- Graceful error handling and empty states

## Technology Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **UI:** React 19 + Tailwind CSS (Native Tailwind utility classes)
- **Testing / Linting:** ESLint / TypeScript

*(See `package.json` for exact dependency versions.)*

## Project Organization

This repository follows a clear, small-scale layered layout. Main folders under `src/`:

- `domain/` — domain types and entities (`book`, `author`).
- `infrastructure/` — API services and assemblers (converts Gutendex responses to domain entities).
- `application/` — hooks and business logic (e.g. `useBooks`).
- `presentation/` — React components and views used by the App Router pages.

Example tree:

```
src/
├── app/                    # Next.js app router pages
├── application/            # Hooks (useBooks)
├── domain/                 # Domain models (Book, Author)
├── infrastructure/         # API services + assemblers
└── presentation/           # UI components and views
```

## Important Files

- `src/infrastructure/book-api-service.ts` — wraps the Gutendex API call and assembles domain entities.
- `src/infrastructure/asemblers/book-assembler.ts` — maps API `results` into `Book` entities.
- `src/application/useBooks.ts` — client hook to fetch and manage book state.
- `src/presentation/views/books-list-view.tsx` — client view that mounts the hook and renders `BooksList`.

## Environment

This project does not require any private environment variables to run against the public Gutendex API. Optionally you can override the base URL with:

```
NEXT_PUBLIC_BOOKS_API_BASE_URL=https://gutendex.com
```

## Scripts

- `npm run dev` — start development server
- `npm run build` — build for production
- `npm run start` — start production server (after build)
- `npm run lint` — run ESLint

## Contributing

Contributions are welcome. Suggested workflow:

1. Fork the repository
2. Create a branch for your feature/fix: `git checkout -b feat/your-feature`
3. Implement the feature and add tests if applicable
4. Run the linting and formatters
5. Open a Pull Request with a clear description

Please follow TypeScript strictness and keep changes scoped.

## Troubleshooting

- If the app shows "Loading books..." forever, open the browser DevTools console to inspect client-side errors. The app includes console logs from the fetch flow in `book-api-service.ts` to aid debugging.
- If you are rate-limited by the public API, try again later or set `NEXT_PUBLIC_BOOKS_API_BASE_URL` to a local mock server.

## License & Acknowledgements

This project is provided as-is for learning and demo purposes. It consumes the Gutendex API (https://gutendex.com) for sample data.

---
*If you want, I can also add a short `CONTRIBUTING.md`, `CODE_OF_CONDUCT.md`, or a `docs/` folder with screenshots and an API contract.*
