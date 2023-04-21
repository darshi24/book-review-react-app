import {Link} from "react-router-dom";
import {logoutThunk} from "../thunks/user-thunks";
import {useNavigate} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import React from "react";
import {
    findFollowersCount,
    findFollowingCount,
    findIfFollowing,
    userFollowsUser,
    userUnFollowsUser
} from "../services/follows-service";
import {useEffect, useState} from "react";
import {getReviewsCountForAuthor} from "../services/reviews-service";
import {getWishlistCount} from "../services/wishlist-service";


const ProfileDetails = ({user}) => {
    const {currentUser} = useSelector(state => state.users);
    const [followingCount, setFollowingCount]  = useState();
    const [followersCount, setFollowersCount]  = useState();
    const [reviewsCount, setReviewsCount] = useState();
    const [booksInWishlistCount, setBooksInWishlistCount] = useState();
    const [isFollowing, setIsFollowing] = useState();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const logOutHandler = async () => {
        await dispatch(logoutThunk());
        navigate("/login");
    }

    const findIsAlreadyFollowing = async () => {
        if(currentUser) {
            const response = await findIfFollowing(currentUser._id,user._id);
            if (response) {
                setIsFollowing(true);
            }else{
                setIsFollowing(false)
            }
        }

    }

    const loadScreen = async () => {
        const count1 = await findFollowersCount(user._id);
        const count2 = await findFollowingCount(user._id);
        const count3 = await getReviewsCountForAuthor(user._id);
        const count4 = await getWishlistCount(user._id);
        await findIsAlreadyFollowing();
        setFollowersCount(count1);
        setFollowingCount(count2);
        setReviewsCount(count3);
        setBooksInWishlistCount(count4);
    }

    useEffect(() => {
        loadScreen();
    },[]);

    const followHandler = async () => {
        await userFollowsUser(currentUser._id, user._id);
        setIsFollowing(true);
    }

    const unfollowHandler = async () => {
        await userUnFollowsUser(currentUser._id, user._id);
        setIsFollowing(false);
    }

    return(
        <div className="row justify-content-center mt-3">
            <div className="col-6 col-sm-6 col-md-7 card border-primary">
                <div className="card-body">
                    <h3 className="card-title">{user.firstname} {user.lastname}</h3>
                    <h4>
                        @{user.username}
                        {
                            user.role === 'reviewer' ?
                                <i className="ms-2 fas fa-check-circle"></i> : <></>
                        }
                    </h4>
                    {
                        user.bio === undefined ?  <p className="card-text"><i>No bio yet</i></p>
                            : <p className="card-text"><i>{user.bio}</i></p>
                    }
                    {
                        user.email === undefined ? currentUser && <p><i className="fas fa-envelope me-2"></i><i>No email registered</i></p> :
                            currentUser && <p><i className="fas fa-envelope me-2"></i>{user.email}</p>
                    }

                </div>
            </div>
            <div className="col-4 col-sm-4 col-md-3">
                <div className="list-group ">
                    <div className="list-group-item bg-primary">Some Stats</div>
                    {
                        user.role === "reviewer" ?
                            <Link to={`/profile/${user._id}/followers`} className="list-group-item">
                                <span className="me-2 text-decoration-underline">Followers</span>
                                <span className="badge bg-dark">{followersCount}</span>
                            </Link> :
                            <Link to={`/profile/${user._id}/following`} className="list-group-item">
                                <span className="me-2 text-decoration-underline">Following</span>
                                <span className="badge bg-dark">{followingCount}</span>
                            </Link>
                    }
                    {
                        user.role === "user" ?
                        currentUser!=null && currentUser._id === user._id && <Link to={`/profile/${user._id}/wishlist`} className="list-group-item">
                                <span className="me-2 text-decoration-underline">Wishlist</span>
                                <span className="badge bg-dark">{booksInWishlistCount}</span>
                            </Link> :
                            <Link to={`/profile/${user._id}/reviews`} className="list-group-item">
                                <span className="me-2 text-decoration-underline">Reviews</span>
                                <span className="badge bg-dark">{reviewsCount}</span>
                            </Link>
                    }


                </div>

                {
                    currentUser && user.role === "reviewer" && currentUser._id !== user._id && !isFollowing?
                        <div>
                            <button className="mt-2 btn btn-warning" onClick={followHandler}>Follow</button>
                        </div> :<></>
                }


                {
                    currentUser && user.role === "reviewer" && currentUser._id !== user._id && isFollowing?
                        <div>
                            <button className="mt-2 btn btn-warning" onClick={unfollowHandler}>UnFollow</button>
                        </div> :<></>
                }

            </div>
            {
                currentUser && user._id === currentUser._id ?
                    <div className="row justify-content-center ">
                        <div>
                            <Link to="../edit-profile" className="btn btn-warning w-25 m-2">Edit Profile</Link>
                        </div>
                        <button className="btn btn-danger w-25" onClick={logOutHandler}>Log out</button>

                    </div>
                : <></>
            }

        </div>
    )
}

export default ProfileDetails;