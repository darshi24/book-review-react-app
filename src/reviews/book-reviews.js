import BookReviewItem from "./book-review-item";

const BookReviewsComponent = ({reviews}) => {

    return(
        <div className="col-11 list-group mt-3">
            {
                reviews.map((review) =>
                    <BookReviewItem review={review}/>
                )
            }
        </div>


    )
}

export default BookReviewsComponent;