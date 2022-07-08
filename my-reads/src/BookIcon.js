import "./BookIcon.css";
import { Link } from "react-router-dom";
import { ImgUrl } from "./utils";

const BookIcon = ({
    book, allShelves, onMoveToShelf
}) => {
    const moveToShelfClicked = (book, shelf) => {
        onMoveToShelf(book, shelf);
    }

    return (<div className="book-panel">
        <Link to={"/details/" + book.id} className="book-info">
            <img src={ImgUrl(book.image)}></img>
            <div>{book.title}</div>
            <div>{book.author}</div>
        </Link>
        <div className="dropdown-holder">
            <div className="dropdown-invoker"> 
                <div className="dropdown-button">+</div> 
                <div className="dropdown-menu">
                    {
                        allShelves
                            .filter(shelf => shelf.id != book.onShelf)
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