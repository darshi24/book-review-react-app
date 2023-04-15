import {useParams} from "react-router";
import {useEffect, useState} from "react";
import {getReviewsForAuthor} from "../services/reviews-service";
import BookReviewItem from "../reviews/book-review-item";

const ReviewsListComponent = () => {
    const {uid} = useParams();
    const [reviews, setReviews] = useState({});
    const getAllReviewsByUser = async() => {
        const response = await getReviewsForAuthor(uid);
        setReviews(response);
    }

    useEffect(() => {
        getAllReviewsByUser();
    },[reviews]);
    return(
        <div className="row justify-content-center">
            <div className="col-11">
                <h1>All reviews</h1>

                <div className="row list-group mt-3">
                    {
                        reviews && reviews.length > 0 ? reviews.map((review) =>
                            <BookReviewItem review={review}/>
                        )  : <></>
                    }
                </div>
            </div>
        </div>

    )
}

export default ReviewsListComponent;