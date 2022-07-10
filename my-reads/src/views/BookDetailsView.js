import "./BookDetailsView.css";

import { useParams } from "react-router-dom";
import Navigation from "../Navigation";
import { ImgUrl } from "../utils";
import { get } from "../BooksAPI";
import { useState } from "react";

const BookDetailsView = () => {

    const [bookMatch, setBookMatch] = useState(undefined);
    const { id } = useParams();

    const fetchBook = async () => {
        const bookResult = await get(id);
        setBookMatch(bookResult);
    };

    fetchBook();

    return (
        <div>
            <Navigation />
            {
                !!bookMatch ? 
                <div>
                    <h1>{bookMatch.title}</h1>
                    <h2>{bookMatch.subtitle}</h2>
                    <h3>{bookMatch.authors.map((a, i) => <span key={i}>{a}</span>)}</h3>
                    <img src={ImgUrl(bookMatch)} alt="Book cover"></img>
                    <div className="book-details-description">
                        {bookMatch.description}
                    </div>
                </div> 
                : <span>No such book</span>
            }
        </div>
    );
}

export default BookDetailsView;