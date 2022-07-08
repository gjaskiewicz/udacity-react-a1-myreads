import "./BookListHeader.css";

const BookListHeader = ({
    bookListName
}) => {
    return (<div>
        <div className="header-name">{bookListName}</div>
        <hr />
    </div>);
};

export default BookListHeader;