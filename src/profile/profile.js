import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {profileThunk} from "../thunks/user-thunks";
import ProfileDetails from "./profile-details";
import {useParams} from "react-router";
import {findUserByID} from "../services/auth-service";

const ProfileComponent = () => {
    const {currentUser} = useSelector(state => state.users);
    const [profile, setProfile] = useState(currentUser);
    const {uid} = useParams();

    console.log("State of current user in profile page ")
    console.log(profile);

    // const dispatch = useDispatch();
    const fetchProfileOtherUser = async () => {
        const user = await findUserByID(uid);
        setProfile(user.data);
        return;
    }
    // const fetchProfile = async () => {
    //     const response = await dispatch(profileThunk());
    //     setProfile(response.payload);
    //     console.log("After fetch profile");
    //     console.log(response);
    // }

    const loadScreen = async () => {
        if(uid) {
            await fetchProfileOtherUser();
        }else{
            // console.log("2")
            // await fetchProfile();
        }
    }

    useEffect(() => {
        loadScreen();
    },[uid]);


    return(
        <div className="mt-3">
            {
                profile && <ProfileDetails user={profile}/>
            }
        </div>
    )


}

export default ProfileComponent;