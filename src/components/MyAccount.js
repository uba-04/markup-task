import React, { useState } from 'react';
import Breadcrumb from './Breadcrumb';

function MyAccount ({ user }) {
    const [editMode, setEditMode] = useState(false);
    const [userInfo, setUserInfo] = useState(user);

    const saveChanges = () => {
        setEditMode(false);
    };

    return (
        <div className="account-settings">
            <Breadcrumb path="/my-account"/>
            <h2>Account Settings</h2>
            {editMode ? (
                <button onClick={saveChanges}>Save Changes</button>
            ) : (
                <button onClick={() => setEditMode(true)}>Edit Profile</button>
            )}

            <div className="user-info">
                <h3>First Name: {editMode ? 
                                <input id="firstname" name="First Name" onChange={e => setUserInfo({ ...userInfo, firstName: e.target.value })} value={userInfo.firstName}/> :
                                userInfo.firstName}</h3>
                <h3>Last Name: {editMode ? 
                                <input id="lastname" name="Last Name" onChange={e => setUserInfo({ ...userInfo, lastName: e.target.value })} value={userInfo.lastName}/> :
                                userInfo.lastName}</h3>
            </div>
        </div>
    );
};

export default MyAccount;