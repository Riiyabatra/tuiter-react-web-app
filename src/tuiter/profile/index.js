import React from "react";
import {useSelector} from "react-redux";
import "./index.css";
import { useNavigate } from 'react-router-dom'

const ProfileComponent = () => {
    const profile = useSelector((state) => state.prof);
    const navigate = useNavigate();

    return(
        <>
            <div className="row">
                <div className="col-1">
                    <button onClick={() => navigate("/tuiter/home")} type="button"><i className="fa fa-arrow-left" aria-hidden="true"></i></button>
                </div>
                <div className="col">
                    <h3>{profile.firstName} {profile.lastName}</h3>
                    <p>6,114 Tweets</p>
                </div>
            </div>
            <div>
                <img className="wd-fill" alt="" src={`/images/${profile.bannerPicture}`}/>
                <img className="wd-profile" alt="" src={`/images/${profile.profilePicture}`}/>
                <button onClick={() => navigate("/tuiter/edit-profile")} type="button" className="btn btn-outline-dark wd-edit-button">Edit profile</button>
            </div>
            <div className="wd-content">
                <br/>
                <br/>
                <br/>
                <br/>
                <div>
                    <h3>{profile.firstName} {profile.lastName}</h3>
                </div>
                    <p>{profile.handle}</p>
                    <p>{profile.bio}</p>
                    <p>
                        <i className="fas fa-map-marker-alt p-2" aria-hidden="true"><span>  {profile.location}</span></i>
                        <i className="fa-solid fa-magnifying-glass p-2" aria-hidden="true"><span>  Born {profile.dateOfBirth}</span></i>
                        <i className="fa-solid fa-calendar-days p-2" aria-hidden="true"><span>  Joined {profile.dateJoined}</span></i>
                    </p>
                    <p><strong>{profile.followingCount}</strong> Following <strong
                        className="font-weight-bold">{profile.followersCount}</strong> Followers</p>
            </div>

        </>
    );
};
export default ProfileComponent;