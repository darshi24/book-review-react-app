import React, {useState} from "react";
import {useNavigate} from "react-router";
import {useDispatch} from "react-redux";
import {registerThunk} from "../thunks/user-thunks";

const SignUpComponent = () => {

    const [newUser, setNewUser] = useState({});
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const register= async () => {
        try {
            await dispatch(registerThunk(newUser));
            navigate("/profile");
        } catch (err) {
            console.log(err);
        }
    }

    const firstNameChangeHandler = (event) => {
        setNewUser({...newUser, firstname: event.target.value})
    }

    const lastNameChangeHandler = (event) => {
        setNewUser({...newUser, lastname: event.target.value})
    }
    const userNameChangeHandler = (event) => {
        setNewUser({...newUser, username: event.target.value})
    }

    const passwordChangeHandler = (event) => {
        setNewUser({...newUser, password: event.target.value})
    }

    const roleChangeHandler = (event) => {
        setNewUser({...newUser, role: event.target.value})
    }

    return(
        <div className="row justify-content-center mt-5">
            <div className="form-group col-sm-9 col-md-7 cl-lg-6">
                <div className="form-floating mt-2">
                    <input  className="form-control" onChange={firstNameChangeHandler}/>
                    <label className="form-label">First Name</label>
                </div>

                <div className="form-floating mt-2">
                    <input  className="form-control" onChange={lastNameChangeHandler}/>
                    <label className="form-label">Last Name</label>
                </div>

                <div className="form-floating mt-2">
                    <input  className="form-control" onChange={userNameChangeHandler}/>
                    <label className="form-label">User Name</label>
                </div>

                <div className="form-floating mt-2">
                    <input type="password" className="form-control"  onChange={passwordChangeHandler} />
                    <label className="form-label">Password</label>
                </div>

                <div className="btn-group mt-3" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" className="btn-check" name="role" id="reviewer" value= "reviewer" onClick={roleChangeHandler}/>
                    <label className="btn btn-outline-primary" style={{"width":"150px"}} for="reviewer">Reviewer</label>
                    <input type="radio" className="btn-check" name="role" id="user" value= "user" onClick={roleChangeHandler}/>
                    <label className="btn btn-outline-primary" style={{"width":"150px"}} for="user">User</label>
                </div>


                <div>
                    <button className="btn btn-primary mt-2" onClick={register}>Sign Up</button>
                </div>

            </div>
        </div>


    )
}
export default SignUpComponent;