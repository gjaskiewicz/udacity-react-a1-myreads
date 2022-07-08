import { useParams } from "react-router-dom";
import Navigation from "../Navigation";
import { ImgUrl } from '../utils';

const BookDetailsView = ({
    books
}) => {
    let { id } = useParams();

    const bookMatch = books.filter(b => b.id === id);

    return (
        <div>
            <Navigation />
            {
                bookMatch.length > 0 ? 
                <div>
                    <h1>{bookMatch[0].title}</h1>
                    <h2>{bookMatch[0].author}</h2>
                    <img src={ImgUrl(bookMatch[0].image)}></img>
                    <div>
                        {bookMatch[0].description}
                    </div>
                </div> 
                : <span>No such book</span>
            }
        </div>
    );
}

export default BookDetailsView;