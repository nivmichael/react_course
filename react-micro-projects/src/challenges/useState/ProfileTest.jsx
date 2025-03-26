import React, { useState } from 'react'

const ProfileTest = () => {
    const [profile, setProfile] = useState(
        {name: "Michael", age: 36}
    );

    const handleNameChange = (event) => {
        setProfile({name: event.target.value})
    }
    
    return (
        <div><label>Change name object</label>
            <input onChange={handleNameChange} type="text" />
            <label>Display Name: {profile.name}</label>
        </div>
    )
}

export default ProfileTest