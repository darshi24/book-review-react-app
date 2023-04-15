import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

const BookReviewItem = ({review}) => {

    const {currentUser} = useSelector(state => state.users);
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
                    {review.content}
                </div>
            </div>
            {
                currentUser && review.reviewerID._id === currentUser._id ?
                    <div className="col-12 col-sm-2 col-lg-2 float-end">
                        <button className="btn btn-outline-dark">Delete</button>
                    </div> : <></>
            }
        </div>
    )
}

export default BookReviewItem;