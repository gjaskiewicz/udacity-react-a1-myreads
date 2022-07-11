import "./SearchView.css";
import "../common.css";

import Navigation from "../Navigation";
import BookList from "../BookList";
import { search } from "../BooksAPI";
import { useState } from "react";

const SearchView = ({
    books, allShelves, onMoveToShelf
}) => {

    let debounceHandle = undefined;
    let debounceQuery = "";

    const [searchBooks, setSearchBooks] = useState([]);
    const [error, setError] = useState(undefined);

    const debounceSearch = () => {
        const makeSearch = async () => {
            const searchBooksResult = await search(debounceQuery, 10);

            const shelfMap = { };
            books.forEach(book => {
                shelfMap[book.id] = book.shelf;
            });
            if (searchBooksResult !== undefined
                && searchBooksResult.error === undefined) {
                searchBooksResult.forEach(book => {
                    if (!!shelfMap[book.id]) {
                        book.shelf = shelfMap[book.id];
                    }
                });
            }

            setError(searchBooksResult?.error);
            setSearchBooks(searchBooksResult || []);
        };
        makeSearch();
    }

    const searchInputChanged = (e) => {
        if (debounceHandle) {
            clearTimeout(debounceHandle);
            debounceHandle = undefined;
        }
        debounceQuery = e.target.value;
        debounceHandle = setTimeout(debounceSearch, 200);
    }

    return (<div>
        <Navigation />
        <span className="search-label">Search</span>
        <input className="search-input" type="text" onChange={searchInputChanged}></input>
        <BookList 
            bookListName="Search results" 
            books={searchBooks} 
            allShelves={allShelves} 
            onMoveToShelf={onMoveToShelf} 
            emptyShelfText={error ? `Error: ${error}` : "Please specify search query..."} />
        <div className="footerDiv">&nbsp;</div>
    </div>);
}

export default SearchView;