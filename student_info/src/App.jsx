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
        <p className="subtitle">Click a book to see full details</p>
      </header>

      <main className="main">
        <section className="book-list">
          <div className="book-grid">
            {BOOKS.map((book) => (
              <article
                key={book.id}
                className={`book-card ${selectedBook?.id === book.id ? 'selected' : ''}`}
                onClick={() => setSelectedBook(book)}
              >
                <span className="book-year">{book.year}</span>
                <h3 className="book-title">{book.title}</h3>
                <p className="book-author">{book.author}</p>
              </article>
            ))}
          </div>
        </section>

        <aside className="book-detail">
          {selectedBook ? (
            <div className="detail-card">
              <span className="detail-badge">Selected</span>
              <h2 className="detail-title">{selectedBook.title}</h2>
              <div className="detail-meta">
                <span className="detail-label">Author</span>
                <p>{selectedBook.author}</p>
              </div>
              <div className="detail-meta">
                <span className="detail-label">Year</span>
                <p>{selectedBook.year}</p>
              </div>
            </div>
          ) : (
            <div className="placeholder">
              <span className="placeholder-icon">📖</span>
              <p>Select a book to view its details</p>
            </div>
          )}
        </aside>
      </main>
    </div>
  )
}

export default App
