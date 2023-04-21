import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {deleteReview} from "../services/reviews-service";
import {deleteReviewThunk} from "../thunks/reviews-thunk";

const BookReviewItem = ({review}) => {

    const {currentUser} = useSelector(state => state.users);
    const dispatch = useDispatch();
    const reviewDeleteHandler = async () => {
        await dispatch(deleteReviewThunk(review._id));
    }
    return(
        <div className="row list-group-item d-inline-flex align-items-center">
            <div className="col-12 col-sm-4 col-lg-3">
                <div className="float-center float-sm-start justify-content-start align-items-start">
                    <Link to={`/profile/${review.reviewerID._id}`}>
                        <h4>{review.reviewerID.firstname} {review.reviewerID.lastname}</h4>
                    </Link>

                    <b>@{review.reviewerID.username}</b>
                </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-7">
                <div className="m-3 m-sm-0 float-center float-sm-start">
                    {
                        currentUser != null || review.content.length <= 10 ? review.content :
                        review.content.substring(0,10).concat("... ")
                    }
                    {
                        currentUser != null || review.content.length <= 10 ? <></> :
                            <Link to="/login" className="badge bg-dark">
                                Log In to Read More
                            </Link>
                    }


                </div>
            </div>
            {
                currentUser && review.reviewerID._id === currentUser._id ?
                    <div className="col-12 col-sm-2 col-lg-2 float-end">
                        <button onClick={reviewDeleteHandler} className="btn btn-outline-dark">Delete</button>
                    </div> : <></>
            }
        </div>
    )
}

export default BookReviewItem;