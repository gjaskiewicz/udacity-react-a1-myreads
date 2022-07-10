import "./BookIcon.css";
import { Link } from "react-router-dom";
import { ImgUrl } from "./utils";

const BookIcon = ({
    book, allShelves, onMoveToShelf, index
}) => {
    const moveToShelfClicked = (book, shelf) => {
        onMoveToShelf(book, shelf);
    }

    return (<div className="book-panel" style={{zIndex: (100 - index || 0)}}>
        <Link to={"/details/" + book.id} className="book-info">
            <div className="book-image-frame">
                <img className="book-image" src={ImgUrl(book)} alt="Book cover"></img>
            </div>
            <div>{book.title}</div>
            <div>{book.subtitle}</div>
            {
                book.authors.map((a, i) => <div key={i}>{a}</div>)
            }
        </Link>
        <div className="dropdown-holder">
            <div className="dropdown-invoker"> 
                <div className="dropdown-button">+</div> 
                <div className="dropdown-menu">
                    {
                        allShelves
                            .filter(shelf => shelf.id !== book.shelf)
                            .map(shelf => {
                                return <a 
                                    key={shelf.id}
                                    className="dropdown-menu-option" 
                                    href="#" 
                                    onClick={() => moveToShelfClicked(book, shelf)}>Move to {shelf.name}</a>
                            })
                    }
                </div>
            </div>
        </div>
    </div>)
}

export default BookIcon;