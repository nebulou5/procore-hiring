#Kontacts Keeper

A basic persistent contact tracker.

### Quick Start

---

    $ npm install
    $ webpack
    $ sudo npm start 

### Test Suite

---

    $ npm install -g mocha
    $ npm run test:watch

### Features

---

1. Search engine friendly isomorphic react
2. Responsive across all device widths
3. Fulltext filtering
4. Sort table by ascending or descending field
5. Persists contacts to serialized cookie

### Backlog

---

1. Refactor common server styles into modules
2. Import/export CSV
3. Persist filter and sort order
4. Form validation
5. Open graph tags
6. Rotate search hourglass icon
7. Use react-router to remember modal state
8. Add ascending/descending sort icons
9. Update contact
10. Delete contact
11. Fine tune fulltext filtering
12. Cross platform/cross browser testing
13. Complete unit tests for:
    - App Component 
    - Redux Action Creators
    - Redux Stores
    - Server Methods
    - ContactsTable Rendering
14. Refactor into standalone components:
    - Contact form modal
    - Icons/stacked icons
15. Add propTypes
16. Refactor server side getTemplateHtml() into module
