import BookReviewsComponent from "../reviews/book-reviews";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {profileThunk} from "../thunks/user-thunks";
import {createReview, getReviewsForBookISBN} from "../services/reviews-service";

const BookItemDetailsComponent = () => {
    const x = useSelector(state => state.users);
    const loading = x.loading;
    const currentUser = x.currentUser;
    const queryParameters = new URLSearchParams(window.location.search)
    const name = queryParameters.get("name");
    const image = queryParameters.get("image");
    const author = queryParameters.get("author");
    const isbn = queryParameters.get("isbn")

    const [resultingReviews, setResultingReviews] = useState({});

    useEffect(() => {
        const api = async( ) => {
            const reviewsForBook = await getReviewsForBookISBN(isbn);
            console.log("Reviews");
            console.log(reviewsForBook);
            setResultingReviews(reviewsForBook);
        }
        api().catch(console.error);
    },[]);

    const [review, setReview] = useState({});

    const reviewContentHandler = (event) => {
        setReview({
            "content" : event.target.value,
            "reviewerID" : currentUser._id,
            "upVotes" : 0,
            "downVotes" : 0,
            "bookISBN" : isbn
        })
    }
    const postReviewHandler = async () => {
        await createReview(review);
    }
    return(
        <div>
            <div className="mt-3 row justify-content-center">
                <div className="col-11 col-sm-10 col-md-8 d-inline-flex bg-primary align-items-center p-1 rounded-2">
                    <div className="col-2 col-sm-3 col-md-2 col-lg-2">
                        <img src={image} width="60px" height="60px"/>
                    </div>
                    <div className="col-5 col-sm-5 col-md-6 col-lg-7">
                        <div className="float-start"><b>{name}</b></div>
                        <br/>
                        <div className="float-start">{author}</div>
                    </div>
                    <div className="col-5 col-sm-4 col-md-4 col-lg-3">
                        <button className=" btn btn-outline-dark"> Add to WishList </button>
                    </div>
                </div>
            </div>

            <div className="row justify-content-center">
                <div className="col-10 mt-4">
                    {
                        loading === false && currentUser != null && currentUser.role === "reviewer" ?
                            <div className="row">
                        <span className="col-10">
                            <input className="form-control"
                                   placeholder="Review this book..."
                                   onChange={reviewContentHandler}/>
                        </span>
                                <button className="btn btn-primary col-2 float-end"
                                        onClick={postReviewHandler}>
                                    Post
                                </button>
                            </div> : <div></div>
                    }
                </div>
            </div>
            <div className="row justify-content-center">
                {
                    resultingReviews.length > 0 ? <BookReviewsComponent resultingReviews={resultingReviews}/> : <div></div>
                }
            </div>

        </div>
    )
}

export default BookItemDetailsComponent;