# TEC BooksList — Application Preview

<p align="justify">
This document provides a compact visual overview of the TEC BooksList application (Next.js + TypeScript). It highlights the main UI states captured in the `docs/screenshots/` folder.
</p>

</br>

# Web Application Preview

<table>
  <tr>
    <td align="center">
      <strong>Loading State</strong><br/>
      <p align="justify"><em>Initial client-side loading state shown while the application fetches books from the Gutendex API. The UI displays a clear loading message and a subtle hint to check the browser console if loading persists.</em></p><br/>
      <img src="./screenshots/books-list-loading.png" width="300"/>
    </td>
    <td align="center">
      <strong>Loaded State</strong><br/>
      <p align="justify"><em>Successful data state where books are displayed in a responsive grid. Each item shows the book ID, title and first author (or "Unknown Author" when missing). The layout adapts to different viewports using Tailwind utility classes.</em></p><br/>
      <img src="./screenshots/books-list-loaded.png" width="300"/>
    </td>
  </tr>
</table>

</br>

# Summary

This preview demonstrates the key UI flows implemented in the web application:

- Client-side data fetching and handling of loading/error/empty states
- Mapping external Gutendex API payloads to domain entities via assemblers
- Responsive presentation of book cards with ID, title and author
- Tailwind utility classes for layout (example: `min-h-screen bg-blue-300` on the page container)

</br>

# Screenshot Folder Structure
<p align="justify">
The following is the structure of the `docs/screenshots/` folder containing the images used in this preview that illustrate the application's UI states:
</p>

```txt
docs/screenshots/
├── books-list-loading.png
├── books-list-loaded.png
└── APP_PREVIEW.md
```
