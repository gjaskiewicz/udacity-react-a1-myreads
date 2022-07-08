import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShelvesView from "./views/ShelvesView";
import SearchView from "./views/SearchView";
import BookDetailsView from "./views/BookDetailsView";
import FirebaseAPI from "./FirebaseAPI";

const db = new FirebaseAPI();
db.init();

function App() {

  useEffect(() => { 
    const fetchData = async () => {
      const books = await db.getBooks();
      setBooks(books);
    };
    fetchData();
  }, [ ]);

  const allShelves = [
    {
      id: "CURRENTLY_READING",
      name: "Currently Reading"
    },
    {
      id: "WANT_TO_READ",
      name: "Want to read"
    },
    {
      id: "READ",
      name: "Read"
    }
  ];

  const [books, setBooks] = useState([ ]);

  const onMoveToShelf = (book, shelf) => {
    book.onShelf = shelf.id;

    const saveData = async () => {
      await db.saveBook(book);
      const books = await db.getBooks();
      setBooks(books);
    };

    saveData();
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <ShelvesView books={books} allShelves={allShelves} onMoveToShelf={onMoveToShelf} />
          } />
          <Route path="/search" element={
            <SearchView books={books} allShelves={allShelves} onMoveToShelf={onMoveToShelf} />
          } />
          <Route path="/details/:id" element={
            <BookDetailsView books={books} />
          } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
