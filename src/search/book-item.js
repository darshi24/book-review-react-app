import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

const BookItem = ({book}) => {
    const x = useSelector(state => state.users);
    const currentUser = x.currentUser;
    return(
        <div className="row list-group-item d-inline-flex align-items-center">
            <div className="col-sm-2 col-lg-2">
                <img  src={book.book_image}
                      height="100px"
                      width="80px"/>
            </div>

            <div className="mt-2 col-sm-7 col-lg-8">
                <h4>{book.title}</h4>
                <h5>Author(s) : {book.author}</h5>
                <p className="p-2"><i>{book.description}</i></p>
            </div>

            <div className="col-sm-3 col-lg-2">

                {
                    currentUser ?
                        <Link to={`/books?name=${book.title}&image=${book.book_image}&author=${book.author}&isbn=${book.primary_isbn10}`} className="btn btn-outline-primary">
                            Reviews >>
                        </Link> :
                        <Link to="/login" className="btn btn-outline-primary">
                            Reviews >>
                        </Link>
                }

            </div>
        </div>
    )
}

export default BookItem;