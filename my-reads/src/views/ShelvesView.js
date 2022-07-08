import "../common.css";
import Navigation from "../Navigation";
import BookList from "../BookList";

const ShelvesView = ({
    books, allShelves, onMoveToShelf
}) => {
    return (
        <div>
            <Navigation />
            {
            allShelves.map(shelf => {
                const booksOnShelf = books.filter(b => b.onShelf === shelf.id);
                return <BookList key={shelf.id} bookListName={shelf.name} books={booksOnShelf} allShelves={allShelves} onMoveToShelf={onMoveToShelf} />
            })
            }
            <div className="footerDiv">&nbsp;</div>
        </div>
    );
}

export default ShelvesView;