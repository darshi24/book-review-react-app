// user name, user handle

import {Link} from "react-router-dom";

const UsersItem = ({user}) => {
    return(
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="card">
                <div className="card-body">
                    <h3 className="card-title">
                        {user.firstname} {user.lastname}
                    </h3>
                    <div className="card-text">
                        <h4>@{user.username}</h4>
                        <Link to={`/profile/${user._id}`} className="badge bg-dark">Go to Profile</Link>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default UsersItem;