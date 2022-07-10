import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShelvesView from "./views/ShelvesView";
import SearchView from "./views/SearchView";
import BookDetailsView from "./views/BookDetailsView";
import { getAll, update } from "./BooksAPI";

function App() {

  useEffect(() => { 
    const fetchData = async () => {
      const books = await getAll();
      setBooks(books);
    };
    fetchData();
  }, [ ]);

  const allShelves = [
    {
      id: "currentlyReading",
      name: "Currently Reading"
    },
    {
      id: "wantToRead",
      name: "Want to read"
    },
    {
      id: "read",
      name: "Read"
    }
  ];

  const [books, setBooks] = useState([ ]);

  const onMoveToShelf = (book, shelf) => {
    book.shelf = shelf.id;

    const saveData = async () => {
      await update(book, shelf.id);
      const books = await getAll();
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
            <BookDetailsView />
          } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
