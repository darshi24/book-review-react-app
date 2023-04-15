import {useLocation, useParams} from "react-router";
import {findFollowers, findFollowing} from "../services/follows-service";
import {useEffect, useState} from "react";
import UsersItem from "./users-item";

const UsersListComponent = () => {
    const {uid} = useParams();
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const listType = paths[3];
    const [followers,setFollowers] = useState({});
    const [following,setFollowing] = useState({});
    const getFollowers = async() => {
        const response = await findFollowers(uid);
        setFollowers(response);
        console.log(followers);
    }

    const getFollowing = async() => {
        const response = await findFollowing(uid);
        setFollowing(response);
    }

    const loadScreen = async () => {
        if(listType === "followers") {
            await getFollowers();
        } else {
            await getFollowing();
        }
    }

    useEffect(()=>{
        loadScreen();
    },[]);

    return (
        <div>
            {
                listType === "followers" ? <h1>Followers</h1> : <h1>Following</h1>
            }


                <div className="row p-3 justify-content-center">
                    {
                        listType==="followers" && followers && followers.length > 0 ?
                            followers.map((user) => <UsersItem user={user.follower}/>) :<></>
                    }
                    {
                        listType==="following" && following && following.length > 0 ?
                            following.map((user) => <UsersItem user={user.followed}/>) :<></>
                    }
                </div>
        </div>
    )
}

export default UsersListComponent;