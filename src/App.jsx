import { useState } from 'react'
import './App.css'

const BOOKS = [
  { id: 1, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
  { id: 2, title: '1984', author: 'George Orwell', year: 1949 },
  { id: 3, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
  { id: 4, title: 'Pride and Prejudice', author: 'Jane Austen', year: 1813 },
  { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
]

function App() {
  const [selectedBook, setSelectedBook] = useState(null)

  return (
    <div className="app">
      <header className="header">
        <h1>Book Information Viewer</h1>
      </header>

      <main className="main">
        <section className="book-list">
          <h2>Books</h2>
          <ul>
            {BOOKS.map((book) => (
              <li
                key={book.id}
                className={selectedBook?.id === book.id ? 'selected' : ''}
                onClick={() => setSelectedBook(book)}
              >
                {book.title}
              </li>
            ))}
          </ul>
        </section>

        <section className="book-detail">
          {selectedBook ? (
            <>
              <h2>Details</h2>
              <dl>
                <dt>Title</dt>
                <dd>{selectedBook.title}</dd>
                <dt>Author</dt>
                <dd>{selectedBook.author}</dd>
                <dt>Year</dt>
                <dd>{selectedBook.year}</dd>
              </dl>
            </>
          ) : (
            <p className="placeholder">Select a book to view details</p>
          )}
        </section>
      </main>
    </div>
  )
}

export default App
