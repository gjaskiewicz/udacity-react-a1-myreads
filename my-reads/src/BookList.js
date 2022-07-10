import "./BookList.css";
import BookListHeader from "./BookListHeader";
import BookIcon from "./BookIcon";

const BookList = ({
    bookListName, 
    books, 
    allShelves,
    onMoveToShelf,
    emptyShelfText
}) => {
    return (<div className="book-list">
        <BookListHeader bookListName={bookListName}/>
        <div className="book-list-content">
        {
            books.length > 0 
                ? books.map((b, i) => (<BookIcon key={b.id} book={b} allShelves={allShelves} onMoveToShelf={onMoveToShelf} index={i} />))
                : <span>{emptyShelfText ?? 'Nothing on this shelf'}</span>
        }
        </div>
    </div>);
};

export default BookList;