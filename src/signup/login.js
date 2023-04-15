import {useNavigate} from "react-router";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {loginThunk} from "../thunks/user-thunks";
const LogInComponent = () => {

    const [loginUser, setLoginUser] = useState({});
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const login = async () => {
        try {
            await dispatch(loginThunk(loginUser));
            navigate("/profile");
        } catch (err) {
            console.log(err);
        }
    }
    const userNameChangeHandler = (event) => {
        setLoginUser({...loginUser, username: event.target.value})
    }

    const passwordChangeHandler = (event) => {
        setLoginUser({...loginUser, password: event.target.value})
    }

    return(

        <div className="row justify-content-center mt-5">
            <div className="form-group col-sm-9 col-md-7 cl-lg-6">
                <div className="form-floating mt-2">
                    <input  className="form-control" onChange={userNameChangeHandler}/>
                    <label className="form-label">Email</label>
                </div>

                <div className="form-floating mt-2">
                    <input className="form-control" onChange={passwordChangeHandler}/>
                    <label className="form-label">Password</label>
                </div>

                <button className="btn btn-primary mt-2" onClick={login}>Log In</button>
            </div>
        </div>

    )
}
export default LogInComponent;