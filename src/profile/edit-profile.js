import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {updateUserThunk} from "../thunks/user-thunks";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router";

const EditProfileComponent = () => {

    const x = useSelector(state => state.users);
    const user = x.currentUser;
    const navigate = useNavigate();
    const [profile, setProfile] = useState({
        "username" : user.username,
        "firstname" : user.firstname,
        "lastname" : user.lastname,
        "bio" : user.bio,
        "email" : user.email,
    });

    const dispatch = useDispatch();
    const saveDetailsHandler = async (newProfile) => {
        await dispatch(updateUserThunk({...user,...newProfile}))
        navigate("/profile");
    }
    const firstnameChangeHandler = (event) => {
        const newFirstName = event.target.value;
        const newProfile = {
            ...profile,
            firstname : newFirstName
        }
        setProfile(newProfile)
    }
    const lastnameChangeHandler = (event) => {
        const newLastName = event.target.value;
        const newProfile = {
            ...profile,
            lastname : newLastName
        }
        setProfile(newProfile)
    }
    const bioChangeHandler = (event) => {
        const newBio = event.target.value;
        const newProfile = {
            ...profile,
            bio : newBio
        }
        setProfile(newProfile)
    }

    const emailChangeHandler = (event) => {
        const newEmail = event.target.value;
        const newProfile = {
            ...profile,
            email : newEmail
        }
        setProfile(newProfile)
    }

    const cancelProfileSaveHandler = () => {

    }

    return(
        <div className="col-8">
            <div className="justify-content-between">
                <Link to="../profile" className="text-decoration-none"> X </Link>
            </div>

            <div className="form-group">
                <div className="form-floating">
                    <input onChange={firstnameChangeHandler} className="form-control" value={profile.firstname}/>
                    <label className="form-label">First Name</label>
                </div>

                <div className="form-floating mt-2">
                    <input onChange={lastnameChangeHandler} className="form-control" value={profile.lastname}/>
                    <label className="form-label">Last Name</label>
                </div>

                <div className="form-floating mt-2">
                    <input onChange={bioChangeHandler} className="form-control" value={profile.bio}/>
                    <label className="form-label">Bio</label>
                </div>

                <div className="form-floating mt-2">
                    <input onChange={emailChangeHandler} className="form-control" value={profile.email}/>
                    <label className="form-label">Email</label>
                </div>
            </div>

            <button onClick={() => saveDetailsHandler(profile)}
                    className="mt-2 btn btn-primary rounded-pill"> Save </button>
        </div>
    )


}

export default EditProfileComponent;