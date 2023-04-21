import {useDispatch, useSelector} from "react-redux";
import {removeFromWishlistThunk} from "../thunks/wishlist-thunks";

const WishlistItem = ({book}) => {

    const {currentUser} = useSelector((state) => state.users);
    const dispatch = useDispatch();

    const removeFromWishlistHandler = async () => {
        console.log(currentUser._id);
        console.log(book._id);
        await dispatch(removeFromWishlistThunk({currentUserID:currentUser._id,wishlistBookID:book._id}));
    }
    return(
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="card">
                <div className="card-body">
                    <h3 className="card-title">
                        {book.bookTitle}
                    </h3>
                    <div className="card-text">
                        <h4>Author(s) : {book.bookAuthor}</h4>
                        <img src={book.bookImage} height="100px" width="80px"/>
                    </div>

                    <div onClick={removeFromWishlistHandler} className="btn btn-outline-dark mt-2">
                        Remove From Wishlist
                    </div>
                </div>


            </div>

        </div>
    )
}

export default WishlistItem;