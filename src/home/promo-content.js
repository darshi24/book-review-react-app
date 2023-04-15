import {useEffect, useState} from "react";
import {getAllReviews} from "../services/reviews-service";
import {findUsersByRole} from "../services/auth-service";

const PromoContent = () => {

    const [totalReviews, setTotalReviews] = useState();
    const [totalReviewers, setTotalReviewers] = useState();
    const [totalReaders, setTotalReaders] = useState();

    const getAllStats = async () => {
        const reviews = await getAllReviews();
        const reviewers = await findUsersByRole("reviewer");
        const readers = await findUsersByRole("user");

        setTotalReaders(readers);
        setTotalReviewers(reviewers);
        setTotalReviews(reviews);
    }

    useEffect(() => {
        getAllStats();
    },[totalReviewers, totalReaders, totalReviews])
    return(
        <div className="row p-3 justify-content-center">
            <div className="card border-dark col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3">
                <div className="card-body">
                    <h4 className="card-title">10,000+</h4>
                    <p className="card-text">Books</p>
                </div>
            </div>
            <div className="card border-dark col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3">
                <div className="card-body">
                    <h4 className="card-title">{totalReviewers}</h4>
                    <p className="card-text">Certified Reviewers</p>
                </div>
            </div>
            <div className="card border-dark col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3">
                <div className="card-body">
                    <h4 className="card-title">{totalReaders}</h4>
                    <p className="card-text">Readers</p>
                </div>
            </div>
            <div className="card border-dark col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3">
                <div className="card-body">
                    <h4 className="card-title">{totalReviews}</h4>
                    <p className="card-text">Total Reviews</p>
                </div>
            </div>
        </div>
    )
}

export default PromoContent;