import BookReviewItem from "./book-review-item";

const BookReviewsComponent = ({resultingReviews}) => {

    return(
        <div className="col-11 list-group mt-3">
            {
                resultingReviews.map((review) =>
                    <BookReviewItem review={review}/>
                )
            }
        </div>


    )
}

export default BookReviewsComponent;