import PromoContent from "./promo-content";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

const HomeComponent = () => {
    const {currentUser} = useSelector(state => state.users);
    return(
        <div className="p-4">
                {
                    !currentUser &&
                    <div>
                        <i>
                            Welcome to <b>Book Reviews</b>, your go-to destination for honest and insightful book reviews. Join a passionate community of reviewers and readers who share a common love for the written word. Read comprehensive and unbiased book reviews from certified reviewers that help you discover new authors, explore different genres, and dive deeper into your favorite books.
                        </i>
                    </div>
                }


                <div>
                    <Link to="/search" className="mt-3 btn-lg btn btn-outline-primary">Search Books</Link>
                </div>

                {
                    !currentUser &&
                    <div className="list-group m-3">
                        <div className="list-group-item bg-primary"><strong>JOIN AS A REVIEWER</strong></div>
                        <div className="list-group-item br-website-description">
                            <i>Post honest, unbiased reviews on books and help readers find
                                something they would love to read. Build your own community and
                                influence your followers towards a great literary journey.</i>
                        </div>
                        <div className="list-group-item bg-primary"><strong>JOIN AS A READER</strong></div>
                        <div className="list-group-item br-website-description">
                            <i>Join as a reader to explore different genres and books.
                                Follow top reviewers to stay updated about best selling books.
                                Keep track of your favorite books by adding them to your wishlists
                                and read them with your cup of coffee. Whether you're a lifelong
                                reader or just starting to explore the world of literature,
                                you'll find something to love on our website.</i>
                        </div>
                    </div>

                }

                {
                    currentUser &&
                    <div>
                        <h1>WISHLIST BOOKS</h1>
                    </div>
                }

            <PromoContent/>
        </div>
    )
}

export default HomeComponent;