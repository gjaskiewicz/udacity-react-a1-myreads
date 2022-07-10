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

    const debounceSearch = () => {
        const makeSearch = async () => {
            const searchBooksResult = await search(debounceQuery, 10);
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
            emptyShelfText="Please specify search query..." />
        <div className="footerDiv">&nbsp;</div>
    </div>);
}

export default SearchView;