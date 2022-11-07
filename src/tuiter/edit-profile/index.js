import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Button, Form} from 'react-bootstrap';
import {updateProfile} from "../reducers/profile-reducer";
import {useNavigate} from "react-router-dom";

const EditProfileComponent = () => {
    const profile = useSelector((state) => state.prof);
    const [firstName, setFirstName] = useState(profile.firstName);
    const [lastName, setLastName] = useState(profile.lastName);
    const [bio, setBio] = useState(profile.bio);
    const [location, setLocation] = useState(profile.location);
    const [website, setWebsite] = useState(profile.website);
    const [dateOfBirth, setDateofBirth] = useState(profile.dateOfBirth);
    const dispatch = useDispatch();
    const updateAction = () => {
        dispatch(updateProfile({
            ...profile,
            firstName: firstName,
            lastName: lastName,
            bio: bio,
            location: location,
            website: website,
            dateOfBirth: dateOfBirth}));
    }

    const updateName = (e) => {
        const name = e.target.value.split(" ");
        setFirstName(name[0]);
        setLastName(name[1]);
    }

    const updateBio = (e) => {
        const bio = e.target.value;
        setBio(bio);
    }

    const updateLocation = (e) => {
        const location = e.target.value;
        setLocation(location);
    }

    const updateWebsite = (e) => {
        const website = e.target.value;
        setWebsite(website);
    }

    const updateDateOfBirth = (e) => {
        const dateOfBirth = e.target.value;
        setDateofBirth(dateOfBirth);
    }

    const navigate = useNavigate();

    return(
        <>
            <div>
                <p>
                    <button onClick={() => navigate("/tuiter/profile")} type="button" className="btn-close" aria-label="Close"></button>
                    <span class="h2">  Edit Profile</span>
                    <Button className="wd-float-right" variant="primary" type="submit" onClick={updateAction}>
                        Save
                    </Button>
                </p>
            </div>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        onChange={updateName}
                        type='text'
                        value = {firstName + ' ' + lastName}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Bio</Form.Label>
                    <Form.Control
                        onChange={updateBio}
                        type='text'
                        value = {bio}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Location</Form.Label>
                    <Form.Control
                        onChange={updateLocation}
                        type='text'
                        value = {location}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Website</Form.Label>
                    <Form.Control
                        onChange={updateWebsite}
                        type='text'
                        value = {website}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Birth Date</Form.Label>
                    <Form.Control
                        onChange={updateDateOfBirth}
                        type='text'
                        value = {dateOfBirth}
                    />
                </Form.Group>
            </Form>
        </>
    );
};
export default EditProfileComponent;