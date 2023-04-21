import {findFollowers} from "../services/follows-service";
import {useState} from "react";
import {getWishlist} from "../services/wishlist-service";
import {useParams} from "react-router";
import {useEffect} from "react";
import WishlistItem from "./wishlist-item";
import {useDispatch, useSelector} from "react-redux";
import {getWishlistThunk} from "../thunks/wishlist-thunks";

const WishListComponent = () => {

    const {uid} = useParams();
    const x = useSelector(state => state.wishlist);
    const dispatch = useDispatch();
    const getBooksInWishlist = async() => {
        await dispatch(getWishlistThunk(uid));
    }

    useEffect(() => {
        getBooksInWishlist();
    },[])

    console.log(x.books);
    return(
        <div className="row p-3 justify-content-center">
            <h1>Wishlist</h1>
            {
                x.loadingBooks === false && x.books ?
                    x.books.map((book) => <WishlistItem key={book.bookISBN} book={book}/>) : <></>
            }
        </div>
    )
}

export default WishListComponent;