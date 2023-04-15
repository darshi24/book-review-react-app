import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {useLocation} from "react-router";

const NavBarComponent = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const activePage = paths[1];
    const userState = useSelector(state => state.users);
    const currentUser = userState.currentUser;
    return(
        <div className="navbar navbar-light bg-light">
            <ul className="nav nav-pills ms-2">
                <li className="nav-item">
                    <Link to="/" className={`nav-link ${activePage === '' ? 'active' : ''}`} href="../home/home">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/search" className={`nav-link ${activePage === 'search' ? 'active' : ''}`} href="../search/search">Search Books</Link>
                </li>
                {
                    currentUser &&
                    <li className="nav-item">
                        <Link to="/profile" className={`nav-link ${activePage === 'profile' ? 'active' : ''}`} href="../profile/profile">Profile</Link>
                    </li>
                }

                {
                    !currentUser &&
                    <li className="nav-item">
                        <Link to="/login" className={`nav-link ${activePage === 'login' ? 'active' : ''}`} href="../signup/login">Login</Link>
                    </li>

                }
                {
                    !currentUser &&
                    <li className="nav-item">
                        <Link to="/signup" className={`nav-link ${activePage === 'signup' ? 'active' : ''}`} href="../signup/signup">Sign Up</Link>
                    </li>

                }

            </ul>
        </div>
    )
}

export default NavBarComponent;