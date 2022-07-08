import "./SearchView.css";
import "../common.css";

import Navigation from "../Navigation";
import BookList from "../BookList";
import { useState } from "react";

const SearchView = ({
    books, allShelves, onMoveToShelf
}) => {

    let debounceHandle = undefined;
    let debounceQuery = "";

    const [query, setQuery] = useState("");

    const debounceSearch = () => {
        setQuery(debounceQuery);
    }

    const searchInputChanged = (e) => {
        if (debounceHandle) {
            clearTimeout(debounceHandle);
            debounceHandle = undefined;
        }
        debounceQuery = e.target.value;
        debounceHandle = setTimeout(debounceSearch, 200);
    }

    const matchAllQueryPart = (book, parts) => {
        for (let part of parts) {
            if (book.title.toLowerCase().indexOf(part) >= 0) { continue; }
            if (book.author.toLowerCase().indexOf(part) >= 0) { continue; }
            return false;
        }
        return true;
    }

    let filteredBooks = [];
    if (query) {
        const queryParts = query.split(" ").filter(q => !!q).map(q => q.toLowerCase());
        filteredBooks = books.filter(b => matchAllQueryPart(b, queryParts));
    }

    return (<div>
        <Navigation />
        <span className="search-label">Search</span>
        <input className="search-input" type="text" onChange={searchInputChanged}></input>
        <BookList 
            bookListName="Search results" 
            books={filteredBooks} 
            allShelves={allShelves} 
            onMoveToShelf={onMoveToShelf} 
            emptyShelfText="Please specify search query..." />
        <div className="footerDiv">&nbsp;</div>
    </div>);
}

export default SearchView;